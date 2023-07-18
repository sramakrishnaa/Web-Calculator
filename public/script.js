let resultDisplayed = false;

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
  const key = event.key;
  if (/[0-9]/.test(key))
  {
    if (resultDisplayed)
    {
      clearDisplay();
      resultDisplayed = false;
    }
    appendToDisplay(key);
  }
  else if (/[+\-*/.]/.test(key))
  {
    if (resultDisplayed)
    {
      resultDisplayed = false;
    }
    appendToDisplay(key);
  }
  else if (key === '%')
  {
    calculatePercentage();
  }
  else if (key === 'Enter' || key ==='=')
  {
    event.preventDefault();
    calculate();
  }
  else if (key === 'Backspace')
  {
    backspace();
  }
  else if (key === 'C' || key === 'c' )
  {
    clearDisplay();
  }
}

function appendToDisplay(value)
{
  const display = document.getElementById('display');
  display.value += value;
}

function clearDisplay()
{
  const display = document.getElementById('display');
  display.value = '';
}

function calculate()
{
  const display = document.getElementById('display');
  let expression = display.value;
  if (expression) {
    try {
      expression = expression.replace('%', '/100');
      const result = eval(expression);
      display.value = result;
      resultDisplayed = true;
    } catch (error) {
      display.value = 'Error';
    }
  }
}


function calculatePercentage() {
  const display = document.getElementById('display');
  let expression = display.value;
  if (expression) {
    try {
      const percentage = eval(expression) / 100;
      display.value = percentage;
      resultDisplayed = true;
    } catch (error) {
      display.value = 'Error';
    }
  }
}

function backspace() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

