function convert() {
  var fromUnit = document.getElementById("fromUnit").value;
  var toUnit = document.getElementById("toUnit").value;
  var temperature = parseFloat(document.getElementById("temperature").value);

  var converttedValue;
  var resultUnit;

  // Perform conversion logic

  switch (fromUnit) {
    case "C":
      if (toUnit === "F") {
        converttedValue = (temperature * 9) / 5 + 32;
        resultUnit = "F";
      } else if (toUnit === "K") {
        converttedValue = temperature + 273.15;
        resultUnit = "K";
      } else {
        converttedValue = temperature;
        resultUnit = "C";
      }
      break;

    case "F":
      if (toUnit === "C") {
        converttedValue = ((temperature - 32) * 5) / 9;
        resultUnit = "C";
      } else if (toUnit === "K") {
        converttedValue = ((temperature - 32) * 5) / 9 + 273.15;
        resultUnit = "K";
      } else {
        converttedValue = temperature;
        resultUnit = "F";
      }
      break;

    case "K":
      if (toUnit === "C") {
        converttedValue = temperature - 273.15;
        resultUnit = "C";
      } else if (toUnit === "K") {
        converttedValue = ((temperature - 273.15) * 9) / 5 + 32;
        resultUnit = "K";
      } else {
        converttedValue = temperature;
        resultUnit = "K";
      }
      break;
  }

  document.getElementById("result").value =
    converttedValue.toFixed(2) + " " + resultUnit;
}
