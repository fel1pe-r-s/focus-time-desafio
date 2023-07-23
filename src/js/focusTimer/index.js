import * as events from "./events.js";
export function start() {
  // timer.updateDisplay();
  events.registerControls();
  events.registerMusicControls();
}
