'use strict';

var openHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

//Making my stores with object literals
var firstPike = {
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookiePerCust: 6.3,
  avgCookiePerHour: 0,
  totalCookie: 0,
  hourlySales: [],
  rng: function(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
  },
  findAvgCookiePerHour: function() {
    for (var i = 0; i < arrStores.length; i++) {
      var randomNumber = rng(arrStores[i].maxCust, arrStores[i].minCust);
      arrStores[i].avgCookiePerHour = randomNumber * arrStores[i].avgCookiePerCust;
    }
    return arrStores;
  },
  findHourlySales: function() {
    for (var i = 0; i < arrStores.length; i++) {
      for (var j = 0; j < openHours.length; j++) {
        findAvgCookiePerHour();
        arrStores[i].hourlySales[j] = Math.ceil(arrStores[i].avgCookiePerHour);
      }
    }
    console.log(arrStores);
    return arrStores;
  }
};


var SeaTac = {
  location: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookiePerCust: 1.2,
  avgCookiePerHour: 0,
  totalCookie: 0,
  hourlySales: [],
  rng: function(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
  },
  findAvgCookiePerHour: function() {
    for (var i = 0; i < arrStores.length; i++) {
      var randomNumber = rng(arrStores[i].maxCust, arrStores[i].minCust);
      arrStores[i].avgCookiePerHour = randomNumber * arrStores[i].avgCookiePerCust;
    }
    return arrStores;
  },
  findHourlySales: function() {
    for (var i = 0; i < arrStores.length; i++) {
      for (var j = 0; j < openHours.length; j++) {
        findAvgCookiePerHour();
        arrStores[i].hourlySales[j] = Math.ceil(arrStores[i].avgCookiePerHour);
      }
    }
    console.log(arrStores);
    return arrStores;
  }
};


var seattleCenter = {
  location: 'Seattle Center',
  minCust: 11,
  maxCust: 23,
  avgCookiePerCust: 3.7,
  avgCookiePerHour: 0,
  totalCookie: 0,
  hourlySales: [],
  rng: function(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
  },
  findAvgCookiePerHour: function() {
    for (var i = 0; i < arrStores.length; i++) {
      var randomNumber = rng(arrStores[i].maxCust, arrStores[i].minCust);
      arrStores[i].avgCookiePerHour = randomNumber * arrStores[i].avgCookiePerCust;
    }
    return arrStores;
  },
  findHourlySales: function() {
    for (var i = 0; i < arrStores.length; i++) {
      for (var j = 0; j < openHours.length; j++) {
        findAvgCookiePerHour();
        arrStores[i].hourlySales[j] = Math.ceil(arrStores[i].avgCookiePerHour);
      }
    }
    console.log(arrStores);
    return arrStores;
  }
  };


var capitalHill = {
  location: 'Capital Hill',
  minCust: 20,
  maxCust: 38,
  avgCookiePerCust: 2.3,
  avgCookiePerHour: 0,
  totalCookie: 0,
  hourlySales: [],
  rng: function(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
  },
  findAvgCookiePerHour: function() {
    for (var i = 0; i < arrStores.length; i++) {
      var randomNumber = rng(arrStores[i].maxCust, arrStores[i].minCust);
      arrStores[i].avgCookiePerHour = randomNumber * arrStores[i].avgCookiePerCust;
    }
    return arrStores;
  },
  findHourlySales: function() {
    for (var i = 0; i < arrStores.length; i++) {
      for (var j = 0; j < openHours.length; j++) {
        findAvgCookiePerHour();
        arrStores[i].hourlySales[j] = Math.ceil(arrStores[i].avgCookiePerHour);
      }
    }
    console.log(arrStores);
    return arrStores;
  }
};



var alki = {
  location: 'Alki',
  minCust: 20,
  maxCust: 38,
  avgCookiePerCust: 4.6,
  avgCookiePerHour: 0,
  totalCookie: 0,
  hourlySales: [],
  rng: function(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
  },
  findAvgCookiePerHour: function() {
    for (var i = 0; i < arrStores.length; i++) {
      var randomNumber = rng(arrStores[i].maxCust, arrStores[i].minCust);
      arrStores[i].avgCookiePerHour = randomNumber * arrStores[i].avgCookiePerCust;
    }
    return arrStores;
  },
  findHourlySales: function() {
    for (var i = 0; i < arrStores.length; i++) {
      for (var j = 0; j < openHours.length; j++) {
        findAvgCookiePerHour();
        arrStores[i].hourlySales[j] = Math.ceil(arrStores[i].avgCookiePerHour);
      }
    }
    console.log(arrStores);
    return arrStores;
  }
};

var arrStores = [firstPike, SeaTac, seattleCenter, capitalHill, alki]; //storing my store data into an array


function rng(min, max) { //function to find a random number
  return Math.floor(Math.random() * (max - min)) + min;
};

// function findAvgCookiePerHour() {
//   for (var i = 0; i < arrStores.length; i++) {
//     var randomNumber = rng(arrStores[i].maxCust, arrStores[i].minCust);
//     // console.log(randomNumber);
//     arrStores[i].avgCookiePerHour = randomNumber * arrStores[i].avgCookiePerCust;
//   }
//   return arrStores;
// };
//
// function findHourlySales() {
//   for (var i = 0; i < arrStores.length; i++) {
//     for (var j = 0; j < openHours.length; j++) {
//       findAvgCookiePerHour();
//       arrStores[i].hourlySales[j] = Math.ceil(arrStores[i].avgCookiePerHour);
//     }
//   }
//   console.log(arrStores);
//   return arrStores;
// }
//
// var storeNames = document.getElementsByClassName ('store_name');

findHourlySales();
