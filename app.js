'use strict'
//Matt Petersen & I pair programmed a lot of this. He helped quite a bit with setup and troubleshooting.

function Store(name, min, max, avgCookies) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.totalCookies = 0;
  this.time = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '];
  this.cookieStorage = [];
  

  this.renderCityName = function(){
    var table = document.getElementById('tableNumbers');
    var row = document.createElement('tr');
    var tableData = document.createElement('td');
    tableData.textContent = this.name;
    row.appendChild(tableData);


    for(var i = 0; i < this.time.length; i++) {
    //tableData receives content
      var tableData = document.createElement('td');
      tableData.textContent = this.cookieStorage[i];
      row.appendChild(tableData);
    }
    var cookieTotalsAll = document.createElement('td');
    cookieTotalsAll.textContent = this.totalCookies;
    row.appendChild(cookieTotalsAll);
    table.appendChild(row);
  }
  
  function getRandomArbitrary(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  this.calculatePerHour = function(){
    for (var i = 0; i < this.time.length; i++){
      var customerNumber = getRandomArbitrary(this.min, this.max);
      var cookiesThisHour = Math.round(customerNumber * this.avgCookies);
      // this.totalCookies += cookiesThisHour;
      //Alistair helped me with line 28. Skyler helped me clean up and make sense of many of the individual methods.
      this.cookieStorage.push(cookiesThisHour);
      this.totalCookies = cookiesThisHour + this.totalCookies;
    }
  }
  this.renderTimeDisplay = function(){
    var table = document.getElementById('tableNumbers');
    var row = document.createElement('tr');
    var tableData = document.createElement('td');
    row.appendChild(tableData);


    for (var i = 0; i < this.time.length; i++){
      var tableData = document.createElement('td');
      tableData.textContent = this.time[i];
      row.appendChild(tableData);
    }
    var tableData = document.createElement('td');
    tableData.textContent = 'City total: ';
    row.appendChild(tableData);
    table.appendChild(row);
  
  }
  this.renderBottomRow = function(){
    var table = document.getElementById('tableNumbers');
    var row = document.createElement('tr');
    var tableData = document.createElement('td');
    tableData.textContent = 'Hourly all locations';
    row.appendChild(tableData);
    var cookieCounter = 0;

    for (var i = 0; i < this.time.length; i++) {
      var tableData = document.createElement('td');
      var hourlyTotals = store1.cookieStorage[i] + store2.cookieStorage[i] + store3.cookieStorage[i] + store4.cookieStorage[i] + store5.cookieStorage[i];
      tableData.textContent = hourlyTotals;
      cookieCounter = cookieCounter + hourlyTotals;
      row.appendChild(tableData);
    }
    var tableData = document.createElement('td');
    tableData.textContent = cookieCounter;
    row.appendChild(tableData);
    table.appendChild(row);
  }
}
var store1 = new Store('Seattle', 23, 65, 6.5);

store1.calculatePerHour();
store1.renderTimeDisplay();
store1.renderCityName();

var store2 = new Store('Tokyo', 3, 24, 1.2);

store2.calculatePerHour();
store2.renderCityName();

var store3 = new Store('Dubai', 11, 38, 3.7);

store3.calculatePerHour();
store3.renderCityName();

var store4 = new Store('Paris', 20, 38, 2.3);

store4.calculatePerHour();
store4.renderCityName();

var store5 = new Store('Lima', 2, 16, 4.6);

store5.calculatePerHour();
store5.renderCityName();
store5.renderBottomRow();