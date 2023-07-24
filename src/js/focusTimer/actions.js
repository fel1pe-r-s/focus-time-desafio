import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";
import * as sounds from "./sounds.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countdown();
  sounds.buttonPressAudio.play();
}
export function plus() {
  let minutes = Number(el.minutes.textContent);

  if (minutes === 60) {
    return;
  }
  ++minutes;
  el.minutes.textContent = minutes;
  sounds.buttonPressAudio.play();
}
export function minus() {
  let minutes = Number(el.minutes.textContent);
  if (minutes === 0) {
    return;
  }
  --minutes;
  el.minutes.textContent = minutes;
  sounds.buttonPressAudio.play();
}
export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
  timer.updateDisplay();
  sounds.buttonPressAudio.play();
}

export function toggleMusic(action, element, volumeValue) {
  let stringAction = String(action);
  let isVolume = volumeValue === undefined;
  el.musicControls.querySelectorAll(".music-on").forEach((e) => {
    if (e !== element) {
      e.classList.remove("music-on");
    }
  });

  let isMute = element.classList.toggle("music-on");
  state.isMute = isMute;

  switch (stringAction) {
    case "rain":
      if (isVolume) {
        sounds[action].volume = 0.5;
        if (isMute) {
          sounds.forest.pause();
          sounds.fireplace.pause();
          sounds.cafeteria.pause();
          sounds[action].play();
        } else {
          sounds[action].pause();
        }
      } else {
        sounds[action].volume = volumeValue / 100;
      }

      break;
    case "fireplace":
      if (isVolume) {
        sounds[action].volume = 0.5;
        if (isMute) {
          sounds.rain.pause();
          sounds.forest.pause();
          sounds.cafeteria.pause();
          sounds[action].play();
        } else {
          sounds[action].pause();
        }
      } else {
        sounds[action].volume = volumeValue / 100;
      }

      break;
    case "cafeteria":
      if (isVolume) {
        sounds[action].volume = 0.5;
        if (isMute) {
          sounds.rain.pause();
          sounds.forest.pause();
          sounds.fireplace.pause();
          sounds[action].play();
        } else {
          sounds[action].pause();
        }
      } else {
        sounds[action].volume = volumeValue / 100;
      }

      break;
    case "forest":
      if (isVolume) {
        sounds[action].volume = 0.5;
        if (isMute) {
          sounds.rain.pause();
          sounds.cafeteria.pause();
          sounds.fireplace.pause();
          sounds[action].play();
        } else {
          sounds[action].pause();
        }
      } else {
        sounds[action].volume = volumeValue / 100;
      }

      break;
    default:
      console.log(`Sorry, music not found.`);
  }
}
