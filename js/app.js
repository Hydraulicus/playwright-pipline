//creating counter
document.addEventListener('DOMContentLoaded', () => {
  let counter = 0;

  const counterDisplay = document.getElementById('counter-display');
  const messageDisplay = document.getElementById('message-display');
  const incrementButton = document.getElementById('increment-button');

  incrementButton.addEventListener('click', () => {
    if (counter < 5) {
      counter++;
      counterDisplay.textContent = counter;
      if (counter === 5) {
        messageDisplay.textContent = '5 is reached';
      }
    }
  });
});
