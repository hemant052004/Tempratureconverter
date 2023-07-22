let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

function celToFar(){
    let output1 = ( parseFloat(celsius.value) * 9/5 ) + 32;
    let output2 = ( parseFloat(celsius.value)+273.15);
    fahrenheit.value = parseFloat(output1.toFixed(2));
    kelvin.value = parseFloat(output2.toFixed(2));
}

function farToCel(){
    let output1 = ( parseFloat(fahrenheit.value) - 32) * 5/9;
    let output2 = (( parseFloat(fahrenheit.value) - 32) * 5/9)+273.15;
    celsius.value = parseFloat( output1.toFixed(2));
    kelvin.value = parseFloat( output2.toFixed(2));
    console.log(output);
}
function kelToCel(){
    let output1 = ( parseFloat(kelvin.value) - 273.15);
    let output2 = (( parseFloat(kelvin.value) -273.15) * 9/5)+32;
    celsius.value = parseFloat( output1.toFixed(2));
    fahrenheit.value = parseFloat( output2.toFixed(2));
    console.log(output);
}