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
	const feet = value * 3.281;
	const meters = value * 0.3048;

	meterFeetEl.textContent = `${value} meters = ${feet} feet | ${value} feet = ${meters} meters`;
};

const toLitersGallons = (value) => {
	const gallons = value * 0.264;
	const liters = value * 4.54609;

	literGallonEl.textContent = `${value} liters = ${gallons} gallons | ${value} gallons = ${liters} liters`;
};

const toKiloPounds = (value) => {
	const pounds = value * 2.204;
	const kilos = value * 0.4535924;

	kiloPoundEl.textContent = `${value} kilos = ${pounds} pounds | ${value} pounds = ${kilos} kilos`;
};
