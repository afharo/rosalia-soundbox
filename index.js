// From https://codepen.io/anon/pen/rEEoBq
(function () {
  function clickHandler(e) {
    if (this.dataset.key) {
      const audio = document.querySelector(`audio[data-key="${this.dataset.key}"]`);
      const key = document.querySelector(`button[data-key="${this.dataset.key}"]`);
      playSound(audio, key);
    } else { // no keyboard shortcut
      const audio = document.querySelector(`audio#${this.dataset.target}`);
      const key = document.querySelector(`button[data-target="${this.dataset.target}"]`);
      playSound(audio, key);
    }

  }

  let globalAudio;
  function playSound(audio, key) {
    if (!audio) return;
    if (globalAudio) {
      globalAudio.pause();
    }
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
    globalAudio = audio;
  }

  function removeTransition(e) {
    e.target.classList.remove('playing');
  }

  const keys = Array.from(document.querySelectorAll('button'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  keys.forEach(key => key.addEventListener('click', clickHandler));
})();