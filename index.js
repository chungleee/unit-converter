/*
1 meter = 3.281 feet
1 feet = 0.3048 meter

1 liter = 0.264 gallon
1 gallon = 4.54609 liter

1 kilogram = 2.204 pound
1 pound = 0.4535924 kg
*/

// VARIABLES
let inputValue;

// DOM ELEMENTS
const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const meterFeetEl = document.getElementById("meter-feet-el");
const literGallonEl = document.getElementById("liter-gallon-el");
const kiloPoundEl = document.getElementById("kilo-pound-el");

// EVENT LISTENERS
convertBtn.addEventListener("click", convert);

function convert() {
	inputValue = inputEl.value;

	toMeterFeet(inputValue);
	toLitersGallons(inputValue);
	toKiloPounds(inputValue);
}

const toMeterFeet = (value) => {
	const feet = Number(value * 3.281).toFixed(3);
	const meters = Number(value * 0.3048).toFixed(3);

	meterFeetEl.textContent = `${value} meters = ${feet} feet | ${value} feet = ${meters} meters`;
};

const toLitersGallons = (value) => {
	const gallons = Number(value * 0.264).toFixed(3);
	const liters = Number(value * 4.54609).toFixed(3);

	literGallonEl.textContent = `${value} liters = ${gallons} gallons | ${value} gallons = ${liters} liters`;
};

const toKiloPounds = (value) => {
	const pounds = Number(value * 2.204).toFixed(3);
	const kilos = Number(value * 0.4535924).toFixed(3);

	kiloPoundEl.textContent = `${value} kilos = ${pounds} pounds | ${value} pounds = ${kilos} kilos`;
};
