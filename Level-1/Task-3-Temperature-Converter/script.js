function convertTemperature() {

    let temp = document.getElementById("tempInput").value;
    let unit = document.getElementById("unit").value;

    let celsius;
    let fahrenheit;
    let kelvin;

    // Error Handling
    if (temp === "") {

        document.getElementById("error").innerHTML = "⚠ Please enter a temperature.";

        document.getElementById("celsiusResult").innerHTML = "-- °C";
        document.getElementById("fahrenheitResult").innerHTML = "-- °F";
        document.getElementById("kelvinResult").innerHTML = "-- K";

        return;
    }

    document.getElementById("error").innerHTML = "";

    temp = parseFloat(temp);

    // Celsius Input
    if (unit === "celsius") {

        celsius = temp;
        fahrenheit = (temp * 9 / 5) + 32;
        kelvin = temp + 273.15;

    }

    // Fahrenheit Input
    else if (unit === "fahrenheit") {

        celsius = (temp - 32) * 5 / 9;
        fahrenheit = temp;
        kelvin = celsius + 273.15;

    }

    // Kelvin Input
    else {

        celsius = temp - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
        kelvin = temp;

    }

    document.getElementById("celsiusResult").innerHTML =
        celsius.toFixed(2) + " °C";

    document.getElementById("fahrenheitResult").innerHTML =
        fahrenheit.toFixed(2) + " °F";

    document.getElementById("kelvinResult").innerHTML =
        kelvin.toFixed(2) + " K";

}