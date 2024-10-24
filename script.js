function calculate(operation) {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result;
  
    if (isNaN(num1) && (operation !== 'sqrt' && operation !== 'square')) {
      document.getElementById('result').innerHTML = "Please enter valid numbers.";
      return;
    }
  
    switch (operation) {
      case 'sum':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        result = num1 / num2;
        break;
      case 'remainder':
        result = num1 % num2;
        break;
      case 'power':
        result = Math.pow(num1, num2);
        break;
      case 'sqrt':
        result = Math.sqrt(num1);
        break;
      case 'square':
        result = num1 * num1;
        break;
      default:
        result = "Invalid operation";
    }
  
    document.getElementById('result').innerHTML = "Result: " + result;
  }
  