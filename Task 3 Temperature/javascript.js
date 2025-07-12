function convertTemp() {
  const input = document.getElementById("teminput").value;
  const unit = document.getElementById("UnitSelect").value;
  const resultArea = document.getElementById("resultArea");

  resultArea.textContent = "";

  if (input === "") {
    resultArea.textContent = "Please enter a temperature value.";
    return;
  }

  const temperature = parseFloat(input);
  if (isNaN(temperature)) {
    resultArea.textContent = "Invalid temperature input.";
    return;
  }

  let result = "";

  switch (unit) {
    case "C":
      // Assuming input is in Fahrenheit or Kelvin, convert to Celsius
      result = `${temperature.toFixed(2)} °C`;
      break;
    case "F":
      // Convert Celsius to Fahrenheit
      const toF = (temperature * 9) / 5 + 32;
      result = `${toF.toFixed(2)} °F`;
      break;
    case "K":
      // Convert Celsius to Kelvin
      const toK = temperature + 273.15;
      result = `${toK.toFixed(2)} K`;
      break;
    default:
      result = "Invalid unit selected.";
  }

  resultArea.textContent = result;
}
