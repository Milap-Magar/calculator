const display = document.getElementById("display");

const appendToDisplay = (input) => {
  display.value += input;
  display.classList.remove("error");
};

const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (err) {
    display.value = "MATH Error";
    display.classList.add("error");
  }
};

const clearDisplay = () => {
  display.value = "";
};
