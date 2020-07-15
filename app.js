'use strict'
//Matt Petersen & I pair programmed a lot of this. He helped quite a bit with setup and troubleshooting.
function getRandomArbitrary(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
//Lines 3-7 come from MDM example shared in class.
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
    //Alistair helped me with line 28. Skyler helped me clean up and make sense of many of the individual methods.
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

//class code review of Darius' project helped me conceptualize the table setup.

//begin table setup
var table = document.getElementById('tableAllStore');
var row = document.createElement('tr');

var tableCell = document.createElement('td');
tableCell.textContent = this.name
row.appendChild(tableCell);

//cookies per hour for entire business day 14 hrs
for(var i = 0; i < this.time.length; i++){

  var tableCell = document.createElement('td');
  tableCell.textContent = this.cookiesThisHour[i];
  row.appendChild(tableCell);
}
this.totalCookies();
tableCell = document.createElement('td');
