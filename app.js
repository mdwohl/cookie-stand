'use strict';
//Matt Petersen & I pair programmed a lot of this. He helped quite a bit with setup and troubleshooting.
var storesPush = [];
var globalTime = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '];

function Store(name, min, max, avgCookies) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.totalCookies = 0;
  this.time = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '];
  this.cookieStorage = [];
  storesPush.push(this);

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
  };
  
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
      //Alistair helped me with this. Skyler helped me clean up and make sense of many of the individual methods.
      this.cookieStorage.push(cookiesThisHour);
      this.totalCookies = cookiesThisHour + this.totalCookies;
    }
  };
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
  };
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

    // var tableFootRender = document.getElementById('tableFootData');
    var tableFoot = document.createElement('tfoot');
    tableFoot.appendChild(row);
    table.appendChild(tableFoot);
    // tableFoot.textContent = ;
    // var grandTotal = 0;
    // for (var x = 0; x < this.time.length; x++){
    //   var newTotal = 0;
    //   for (var j = 0; j < storesPush.length; j++){
    //     newTotal = newTotal + storesPush[j].cookieStorage[x];
    //     tableData.textContent = newTotal;
    //     row.appendChild(tableData);
    //     grandTotal = grandTotal + newTotal;
  };
}
// var tableFoot = document.createElement('tfoot');
// tableFoot.appendChild(row);
// table.appendChild(tableFoot);


//1. set grand total var = 0
//2. loop through hours of opeartion (line 75 does this)
//3. declare a total 
//4. create a loop with a different variable (j) to iterate through stores [j].cookiesPerHour[i].
//5. give content; append to parent
//6. grand total will equal grand total plus totals

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

var grandTotal = 0;
for (var i = 0; i < globalTime.length; i++){
  var newTotal = 0;
  for (var j = 0; j < storesPush.length; j++){
    grandTotal = newTotal + storesPush[j].cookieStorage[i];
    newTotal += storesPush[j] + cookieStorage[i];
  }
  var tableCell = document.createElement('td');
  tableCell.textContent(newTotal);
  row.appendChild(tableData);
}
var grandTotalCell = document.createElement('td');
grandTotalCell.textContent = newTotal;
row.appendChild(grandTotalCell);



//below code is for the form
var inputNewStoreForm = document.getElementById('makeNewStore');
inputNewStoreForm.addEventListener('submit', makeNewStore);
function makeNewStore(event) {
  event.preventDefault();
  console.log(event);

  var newName = event.target.storeName.value;
  var newMin = event.target.Min.value;
  var newMax = event.target.Max.value;
  var newAvgCookies = event.target.average.value;
  var newStore = new Store(newName, newMin, newMax, newAvgCookies);
  newStore.renderCityName();
  console.log(newStore);
}
//render table here