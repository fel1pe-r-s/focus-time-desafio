import { controls } from "./elements.js";
import { musicControls } from "./elements.js";
import * as actions from "./actions.js";

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    if (typeof actions[action] !== "function") {
      return;
    }

    actions[action]();
  });
}

export function registerMusicControls() {
  musicControls.addEventListener("click", (event) => {
    const action = event.target.dataset.music;
    console.log(action);
    let el = event.target;
    if (action === undefined) {
      return;
    }
    actions.toggleMusic(action, el);
  });
}
