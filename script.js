let seconds = 0;
let interval = null;

function start() {
  if (interval) return;
  interval = setInterval(() => {
    seconds++;
    display();
  }, 1000);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  stop();
  seconds = 0;
  display();
}

function display() {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  document.getElementById("time").textContent = `${hrs}:${mins}:${secs}`;
}
