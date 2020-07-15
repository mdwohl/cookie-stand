'use strict'
//Matt Petersen & I pair programmed a lot of this. He helped quite a bit with setup and troubleshooting.
function getRandomArbitrary(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
var openHours = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '];

function Store(name, min, max, avgCookies, openHours) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.totalCookies = 0;
  this.time = openHours;
  this.cookieStorage = [];

  this.renderCityName = function(){
    var cityList = document.getElementById('sales');
    var location = document.createElement('h2');
    location.textContent = this.name;
    cityList.appendChild(location);
    //console.log(cityList);
  }
  this.calculatePerHour = function(){
    for (var i = 0; i < this.time.length; i++){
    var customerNumber = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    var cookiesThisHour = Math.round(customerNumber * this.avgCookies);
    this.totalCookies += cookiesThisHour;
    //Alistair helped me with line 28
    this.cookieStorage.push(cookiesThisHour);
    }
  }
  this.renderTimeDisplay = function(){
    for (var i = 0; i < this.time.length; i++){
    var timeList = document.getElementById('sales');
    var timeLine = document.createElement('li');
    timeLine.textContent = this.time[i] + this.cookieStorage[i] + ' cookies.';
    //console.log(timeLine);
    timeList.appendChild(timeLine);
    //console.log(this.max);
    }
    var cookieTotalEl = document.getElementById('sales');
    var LiEl = document.createElement('li');
    LiEl.textContent = this.totalCookies + ' is the total for this location.';
    cookieTotalEl.appendChild(LiEl);
  }
}
var store1 = new Store('Seattle', 23, 65, 6.5, openHours)

store1.renderCityName();
store1.calculatePerHour();
store1.renderTimeDisplay();

var store2 = new Store('Tokyo', 3, 24, 1.2, openHours)

store2.renderCityName();
store2.calculatePerHour();
store2.renderTimeDisplay();

var store3 = new Store('Dubai', 11, 38, 3.7, openHours)

store3.renderCityName();
store3.calculatePerHour();
store3.renderTimeDisplay();

var store4 = new Store('Paris', 20, 38, 2.2, openHours)

store4.renderCityName();
store4.calculatePerHour();
store4.renderTimeDisplay();

var store5 = new Store('Lima', 2, 16, 4.6, openHours)

store5.renderCityName();
store5.calculatePerHour();
store5.renderTimeDisplay();

// //Tokyo shop statistics
// var avgCookies = {
//   min: 3,
//   max: 24,
//   avgCookies: 1.2,
//   startingCookies: 0,
//   city: 'Tokyo',
//   time: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '],
//   renderTime: function(){
//     var cityList = document.getElementById('tokyo');
//     var location = document.createElement('li');
//     location.textContent = this.city;
//     cityList.appendChild(location);
//   },
//   renderCity: function(){
//       for (var i = 0; i < this.time.length; i++){
//       var getRandomNumber = getRandomArbitrary(this.min,this.max);
//       this.startingCookies = this.startingCookies + getRandomNumber;
//       var timeList = document.getElementById('tokCookies');
//       var timeLine = document.createElement('li');
//       timeLine.textContent = this.time[i] + getRandomNumber + ' cookies.';
//       timeList.appendChild(timeLine);
//       console.log(this.max);
//     }
//     var cookieTotalEl = document.getElementById('tokTotal');
//     var LiEl = document.createElement('li');
//     LiEl.textContent = this.startingCookies + ' is the total for this location.';
//     cookieTotalEl.appendChild(LiEl);
//   }
// }
// avgCookies.renderTime();
// avgCookies.renderCity();

// //Dubai shop statistics

// var avgCookies = {
//   min: 11,
//   max: 38,
//   avgCookies: 3.7,
//   startingCookies: 0,
//   city: 'Dubai',
//   time: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '],
//   renderTime: function(){
//     var cityList = document.getElementById('dubai');
//     var location = document.createElement('li');
//     location.textContent = this.city;
//     cityList.appendChild(location);
//   },
//   renderCity: function(){
//       for (var i = 0; i < this.time.length; i++){
//       var getRandomNumber = getRandomArbitrary(this.min,this.max);
//       this.startingCookies = this.startingCookies + getRandomNumber;
//       var timeList = document.getElementById('dubCookies');
//       var timeLine = document.createElement('li');
//       timeLine.textContent = this.time[i] + getRandomNumber + ' cookies.';
//       timeList.appendChild(timeLine);
//       console.log(this.max);
//     }
//     var cookieTotalEl = document.getElementById('dubTotal');
//     var LiEl = document.createElement('li');
//     LiEl.textContent = this.startingCookies + ' is the total for this location.';
//     cookieTotalEl.appendChild(LiEl);
//   }
// }
// avgCookies.renderTime();
// avgCookies.renderCity();

// //Paris shop statistics

// var avgCookies = {
//   min: 20,
//   max: 38,
//   avgCookies: 2.3,
//   startingCookies: 0,
//   city: 'Paris',
//   time: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '],
//   renderTime: function(){
//     var cityList = document.getElementById('paris');
//     var location = document.createElement('li');
//     location.textContent = this.city;
//     cityList.appendChild(location);
//   },
//   renderCity: function(){
//       for (var i = 0; i < this.time.length; i++){
//       var getRandomNumber = getRandomArbitrary(this.min,this.max);
//       this.startingCookies = this.startingCookies + getRandomNumber;
//       var timeList = document.getElementById('parCookies');
//       var timeLine = document.createElement('li');
//       timeLine.textContent = this.time[i] + getRandomNumber + ' cookies.';
//       timeList.appendChild(timeLine);
//       console.log(this.max);
//     }
//     var cookieTotalEl = document.getElementById('parTotal');
//     var LiEl = document.createElement('li');
//     LiEl.textContent = this.startingCookies + ' is the total for this location.';
//     cookieTotalEl.appendChild(LiEl);
//   }
// }
// avgCookies.renderTime();
// avgCookies.renderCity();

// //Lima shop statistics

// var avgCookies = {
//   min: 2,
//   max: 16,
//   avgCookies: 4.6,
//   startingCookies: 0,
//   city: 'Lima',
//   time: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '],
//   renderTime: function(){
//     var cityList = document.getElementById('lima');
//     var location = document.createElement('li');
//     location.textContent = this.city;
//     cityList.appendChild(location);
//   },
//   renderCity: function(){
//       for (var i = 0; i < this.time.length; i++){
//       var getRandomNumber = getRandomArbitrary(this.min,this.max);
//       this.startingCookies = this.startingCookies + getRandomNumber;
//       var timeList = document.getElementById('limCookies');
//       var timeLine = document.createElement('li');
//       timeLine.textContent = this.time[i] + getRandomNumber + ' cookies.';
//       timeList.appendChild(timeLine);
//       console.log(this.max);
//     }
//     var cookieTotalEl = document.getElementById('seaTotal');
//     var LiEl = document.createElement('li');
//     LiEl.textContent = this.startingCookies + ' is the total for this location.';
//     cookieTotalEl.appendChild(LiEl);
//   }
// }
// avgCookies.renderTime();
// avgCookies.renderCity();

// /* renderAsTable : function(){
// var table = document.getElementById('storeLocations);
// var row = document.createElement('tr');
// var tableHeadCell = document.createElement('th');
// tableHeadCell.textContent = this.name;
// row.appendChild(tableHeadCell);
// table.appendChild(row);
// }