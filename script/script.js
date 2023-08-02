
const radioInputs = document.querySelectorAll('input[type="radio"][name="opcao"]');


radioInputs.forEach(input => {
  input.addEventListener('change', function(event) {

    if (event.isTrusted) {

      playSound();
    }
  });
});

function playSound() {

  const audioElement = document.getElementById('sound');


  if (audioElement && typeof audioElement.play === 'function') {
 
    audioElement.play();
  }
}
