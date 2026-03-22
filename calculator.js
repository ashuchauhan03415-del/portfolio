let display = document.getElementById("display");

document.addEventListener("keydown", function(e) {

  const key = e.key;

  // Numbers (0–9)
  if (!isNaN(key)) {
    display.value += key;
  }

  // Operators
  else if (["+", "-", "*", "/"].includes(key)) {
    display.value += key;
  }

  // Decimal
  else if (key === ".") {
    display.value += key;
  }

  // Enter = Calculate
  else if (key === "Enter") {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  }

  // Backspace = delete last
  else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }

  // Escape = Clear all
  else if (key === "Escape") {
    display.value = "";
  }

});

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

