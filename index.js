/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("convert")
let lengthValue = document.getElementById("length-value")
let volumeValue = document.getElementById("volume-value")
let massValue = document.getElementById("mass-value")

convertBtn.addEventListener("click",function(){
    lengthValue.innerHTML =`${inputEl.value} meters = ${(inputEl.value*3.281).toFixed(2)} feet | ${inputEl.value} feet = ${(inputEl.value/3.281).toFixed(2)} meters`
    volumeValue.innerHTML = `${inputEl.value} liter = ${(inputEl.value*0.264).toFixed(2)} gallon | ${inputEl.value} gallon = ${(inputEl.value/0.264).toFixed(2)} liters`
    massValue.innerHTML = `${inputEl.value} kilogram = ${(inputEl.value*2.204).toFixed(2)} pound | ${inputEl.value} pound = ${(inputEl.value/2.204).toFixed(2)} kilograms`
})


/*20 meters = 65.616 feet | 20 feet = 6.096 meters */