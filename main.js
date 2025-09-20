const plus = document.getElementById('plus');
const minus = document.getElementById('minus')
const display = document.getElementById('display');


plus.addEventListener('click', function add() {
  if (display.value < 10) {
    display.value++
  }
})

minus.addEventListener('click', function sub() {
  if (display.value <= 10 && display.value > 1) {
    display.value--
  }
})