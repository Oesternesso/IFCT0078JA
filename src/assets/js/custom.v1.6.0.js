// JavaScript

const celsiusToFahrenheit = (celsius) => (celsius * 9 / 5 + 32).toFixed(1);
const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5 / 9).toFixed(1);

function showAlert(message) {
  alert(message);
  console.error(message);
}

function isValidNumber(value) {
  return !isNaN(value) && typeof value === 'number';
}

function promptUserForConversion() {
  const userMeasure = prompt(
    'Para convertir Centígrados a Fahrenheit, ingrese <C>\n' +
    'Para convertir Fahrenheit a Centígrados, ingrese <F>'
  );

  return userMeasure;
}

function getUserDegree(measure) {
  const userDegree = prompt(`Ingrese los grados ${measure === 'F' ? 'Centígrados' : 'Fahrenheit'} a convertir`);
  return Number(userDegree);
}

function conversion(measure, degree) {
  let convertedDegree;

  if (measure === 'C') {
    convertedDegree = fahrenheitToCelsius(degree);
    return `Los grados ${degree} Fahrenheit son ${convertedDegree} Centígrados`;
  } else if (measure === 'F') {
    convertedDegree = celsiusToFahrenheit(degree);
    return `Los grados ${degree} Centígrados son ${convertedDegree} Fahrenheit`;
  }
}

function conversor() {
  const userMeasure = promptUserForConversion();

  if (userMeasure !== 'C' && userMeasure !== 'F') {
    showAlert(`La Unidad de los grados introducida <${userMeasure}> por el usuario no es válida.\n` +
      'Por favor,\n' +
      '  - ingrese  para convertir a grados Centígrados\n' +
      '  - ingrese  para convertir a grados Fahrenheit');
    return;
  }

  const initDegree = getUserDegree(userMeasure);

  if (!!!isValidNumber(initDegree)) {
    showAlert(`Los grados introducidos <${initDegree}>º por el usuario no son válidos.\n` +
      'Por favor, ingrese un dato numérico.');
    return;
  }

  const resultMessage = conversion(userMeasure, initDegree);

  if (resultMessage) {
    alert(resultMessage);
    console.log(resultMessage);
  } else {
    showAlert('Ha ocurrido un error al hacer la conversión. Los grados obtenidos no son correctos.');
  }
}

conversor();


