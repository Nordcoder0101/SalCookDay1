'use strict';

function Store(location, minCust, maxCust, avgCookiePerCust) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerCust = avgCookiePerCust;
  this.avgCookiePerHour = 0;
  this.hourlySales = [];
  this.totalSalesPerStore = 0;
};


var openHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];


var firstPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Saettle Center', 11, 23, 3.7);
var capitalHill = new Store('Capital Hill', 20, 38, 2.3);
var alki = new Store('Alki', 20, 38, 4.6);


var arrStores = [firstPike, seaTac, seattleCenter, capitalHill, alki]; //storing my store data into an array

function rng(min, max) { //helper function to find a random number
  return Math.floor(Math.random() * (max - min)) + min;
};

function findAvgCookiePerHour() { //Will use rng() and average cookie per customer to find average cookies sold per hour
  for (var i = 0; i < arrStores.length; i++) {
    var randomNumber = rng(arrStores[i].maxCust, arrStores[i].minCust);
    // console.log(randomNumber);
    arrStores[i].avgCookiePerHour = randomNumber * arrStores[i].avgCookiePerCust;
  }
  return arrStores;
};

function findHourlySales() {//assign a number of sales per hour the store is open
  for (var i = 0; i < arrStores.length; i++) { //loop through objects
    for (var j = 0; j < openHours.length; j++) { //loop through total hours open
      findAvgCookiePerHour();
      arrStores[i].hourlySales[j] = Math.ceil(arrStores[i].avgCookiePerHour);
    }
  }
  console.log(arrStores);
  return arrStores;
}

function findTotalSalesPerStore() {
  for (var i = 0; i < arrStores.length; i++) {
    var totalSalesPerStore = arrStores[i].hourlySales.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    });
    arrStores[i].totalSalesPerStore = totalSalesPerStore;
  }
  console.log(arrStores);
  return arrStores;
}

findHourlySales();
findTotalSalesPerStore();
