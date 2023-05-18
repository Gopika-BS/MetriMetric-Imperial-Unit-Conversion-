/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let inputbtn = document.getElementById("inputBtn")
let inputSec = document.getElementById("input-sec")
let answer1  = document.getElementById("ans-1")
let answer2 = document.getElementById("ans-2")
let answer3 =document.getElementById("ans-3")



inputbtn.addEventListener("click",function(){
   length()
   volume()
   mass()
})
inputSec.value = ""
answer1.innerHTML= ""
answer2.innerHTML=""
answer3.innerHTML= ""

function length(){
    let metersToFeet = inputSec.value * 3.281
    let feetToMeters = inputSec.value * 0.305
    answer1.innerHTML = `${inputSec.value} meters = ${metersToFeet} feet | ${inputSec.value} feet = ${feetToMeters} meters`
     
}
function volume(){
    let litersToGallon = inputSec.value * 0.264
    let gallonToliters = inputSec.value * 3.78541
    answer2.innerHTML = `${inputSec.value} liters = ${litersToGallon} gallon | ${inputSec.value} gallon = ${gallonToliters} liters`
     
}
function mass(){
    let kilosToPound = inputSec.value * 2.204
    let poundToKilos = inputSec.value * 0.454
    answer3.innerHTML = `${inputSec.value} kilos = ${kilosToPound} pound | ${inputSec.value} pound = ${poundToKilos}`
     
}
