'use strict';

//Making my stores with object literals
var firstPike = {
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookiePerCust: 6.3,
  avgCookiePerHour: 0,
};

var SeaTac = {
  location: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookiePerCust: 1.2,
  avgCookiePerHour: 0,
};

var seattleCenter = {
  location: 'Seattle Center',
  minCust: 11,
  maxCust: 23,
  avgCookiePerCust: 3.7,
  avgCookiePerHour: 0,
};

var capitalHill = {
  location: 'Capital Hill',
  minCust: 20,
  maxCust: 38,
  avgCookiePerCust: 2.3,
  avgCookiePerHour: 0,
};

var alki = {
  location: 'Alki',
  minCust: 20,
  maxCust: 38,
  avgCookiePerCust: 4.6,
  avgCookiePerHour: 0,
};

var arrStores = [firstPike, SeaTac, seattleCenter, capitalHill, alki]; //storing my store data into an array

function rng(min, max) { //function to find a random number
  return Math.floor(Math.random() * (max - min)) + min;
};

function findAvgCookiePerHour() {
  for (var i = 0; i < arrStores.length; i++) {
    var randomNumber = rng(arrStores[i].maxCust, arrStores[i].minCust);
    console.log(randomNumber);
    arrStores[i].avgCookiePerHour = randomNumber * arrStores[i].avgCookiePerCust;
  }
  return arrStores;
};

var storeNames = document.getElementsByClassName ('store_name');
console.log(storeNames[0]);


// //Here is the function I am stuck on
// function displayStores() {
//   for (var i = 0; i < storeNames.length; i++) {
//   //  storeNames[i] = arrStores[i].avgCookiePerHour;
//     var firstStore = storeNames[0];
//  }

console.log(firstStore);

findAvgCookiePerHour();
displayStores();
console.log(arrStores[0]);
