function playSound(e) {
	let keyCode;
	if (e.type === 'click') {
		keyCode = e.currentTarget.dataset.key;
	} else {
		keyCode = e.keyCode;
	}
	const audio = document.querySelector(`audio[data-key='${keyCode}']`);
	const key = document.querySelector(`.key[data-key='${keyCode}']`);
	if (!audio) return;
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
}

function removeTransition(e) {
	if (e.propertyName !== 'transform') return;
	this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);
const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('click', playSound));
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
