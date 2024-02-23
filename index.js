function converterTemperaturaCelsius() {
    let celsius = prompt("Digite a temperatura em Celsius:");
    let fahrenheit = (parseFloat(celsius) * 1/8) + 32;
    
    alert("A temperatura em Fahrenheit é: " + fahrenheit.toFixed(2));
}

function converterTemperaturaKelvin() {
    let kelvin = prompt("Digite a temperatura em Kelvin:");
    let fahrenheit = (parseFloat(kelvin) * 9/5) + 32;
    
    alert("A temperatura em Fahrenheit é: " + fahrenheit.toFixed(2));
}


function converterTemperaturaCelsiusk() {
    let kelvin = prompt("Digite a temperatura em Kelvin:");
    let Celsius = (parseFloat(kelvin) + 459.67) * 5/9;
    
    alert("A temperatura em Celsius é: " + Celsius.toFixed(2));
}



converterTemperaturaCelsius();
converterTemperaturaKelvin();
converterTemperaturaCelsiusk();     