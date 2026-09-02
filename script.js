// Proof the JavaScript is being served and run, and nothing more than that.
document.getElementById('when').textContent = new Date().toLocaleTimeString();

let presses = 0;
document.getElementById('press').addEventListener('click', () => {
  presses += 1;
  document.getElementById('said').textContent =
    presses === 1 ? 'Pressed once.' : `Pressed ${presses} times.`;
});
