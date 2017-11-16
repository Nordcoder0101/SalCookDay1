'use strict';

var arrStores = []; //storing my store data into an array

function Store(location, minCust, maxCust, avgCookiePerCust) { //Cookie store constructor function
  this.location = location; // Store name
  this.minCust = minCust; // Min customers in 1 hour
  this.maxCust = maxCust; // Max customers in 1 hour
  this.avgCookiePerCust = avgCookiePerCust; //average number of cookies a customer buys at this location
  this.avgCookiePerHour = 0; // function generated number taking a random number between maxCust and minCust and multiplying it by average cookie per customer
  this.hourlySales = []; // an hourly list of sales in that given hour
  this.totalSalesPerStore = 0; //Total cookie sales in a day per store will be set here
  this.openHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM']; //the hours each store is open
  arrStores.push(this);
  this.findHourlySales();
  this.findTotalSalesPerStore();
};

//defining my methods
Store.prototype.findAvgCookiePerHour = function() { //Will use rng() and average cookie per customer to find average cookies sold per hour
  for (var i = 0; i < arrStores.length; i++) {
    var randomNumber = rng(this.maxCust, this.minCust); //assigning a var to my stores random generated customer per hour
    this.avgCookiePerHour = Math.round(randomNumber * this.avgCookiePerCust); //arithmitic to find a random number of cookies sold in an hour
  }
  return this.avgCookiePerHour; //update value of arrStores
};

Store.prototype.findHourlySales = function() {//assign a number of sales per hour the store is open
  for (var j = 0; j < this.openHours.length; j++) { //loop through total hours open within each store to create a value for the hourlySales array
    this.findAvgCookiePerHour();
    this.hourlySales[j] = Math.round(this.avgCookiePerHour); //use findAvgCookiePerHour() to update hourlySales array and round to nearest integer
  }
  return this.hourlySales;
};

Store.prototype.findTotalSalesPerStore = function() { //function to add the total number of sales made at each store in a day.
  var totalSalesPerStore = this.hourlySales.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;}); //something I found online to add all the integers in an array
  this.totalSalesPerStore = totalSalesPerStore; //updating each objects value for total sales in a day
  console.log(arrStores);
  return this.totalSalesPerStore;
};
//instantiating my objects

var firstPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 23, 3.7);
var capitalHill = new Store('Capital Hill', 20, 38, 2.3);
var alki = new Store('Alki', 20, 38, 4.6);

//creating an array of my instantiated objects


function rng(min, max) { //helper function to find a random number
  return Math.floor(Math.random() * (max - min)) + min;
};



function buildingTable() { //my failng attempt to build a table, cant define the logic because it doesnt work and my brain hurts.

  for (var i = 0; i < arrStores.length; i++) {
    var table = document.getElementById('store_table');
    var row = document.createElement('tr');
    var column = document.createElement('td');
    table.appendChild(row);
    row.innerHTML = arrStores[i].openHours;
    for (var j = 0; j < arrStores[i].hourlySales.length; j++) {
      table.appendChild(column);
      column.innerHTML = arrStores[i].hourlySales[j];
    }
  }
};

//fire off my functions in order

//buildingTable();
