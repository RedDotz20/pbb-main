const display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Math Error";
  }
}

function updateResult() {
  try {
    eval(display.value);
  } catch (error) {
    display.value = "Math Error";
  }
}