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

export function toggleMusic(action, el) {
  let isMute = el.classList.toggle("music-on");
  state.isMute = isMute;
  console.log(el.target);
  let stringAction = String(action);
  switch (stringAction) {
    case "rain":
      if (isMute) {
        sounds.forest.pause();
        sounds.fireplace.pause();
        sounds.cafeteria.pause();
        sounds[action].play();
      } else {
        sounds[action].pause();
      }
      break;
    case "fireplace":
      if (isMute) {
        sounds.rain.pause();
        sounds.forest.pause();
        sounds.cafeteria.pause();
        sounds[action].play();
      } else {
        sounds[action].pause();
      }
      break;
    case "cafeteria":
      if (isMute) {
        sounds.rain.pause();
        sounds.forest.pause();
        sounds.fireplace.pause();
        sounds[action].play();
      } else {
        sounds[action].pause();
      }
      break;
    case "forest":
      if (isMute) {
        sounds.rain.pause();
        sounds.cafeteria.pause();
        sounds.fireplace.pause();
        sounds[action].play();
      } else {
        sounds[action].pause();
      }
      break;
    default:
      console.log(`Sorry, music not found.`);
  }
}
