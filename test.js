'use strict';
//Matt Petersen & I pair programmed a lot of this. He helped quite a bit with setup and troubleshooting.
var storesPush = [];
var time = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '];

var newStoreForm = document.getElementById('makeNewStore');
makeNewStore.addEventListener('submit', addStoreToTable);

function addStoreToTable(event){
  event.preventDefault();
  var newStoreName = event.target.storeName.value;
  var minCust = event.target.min.value;
  var maxCust = event.target.max.value;
  var newStoreAverage = event.target.average.value;

  var addNewStoreToTable = new NewStoreFunction(minCust, maxCust, newStoreAverage, newStoreName);
  addNewStoreToTable.renderAsTable();
}
//constructor begins here

function NewStoreFunction(name, min, max, avgCookies) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.totalCookies = 0;
  this.time = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '];
  this.cookieStorageArray = [];

  storesPush.push(this);
}
NewStoreFunction.prototype.multiplyCustomersByCookieAverage = function() {
  this.min = Math.ceil(this.min);
  this.max = Math.floor(this.max);
  return Math.floor(Math.random() * (this.max - this.min)) + this.min;
};
//this prototype will calculate the sales per hour
NewStoreFunction.prototype.calculatePerHour = function() {
  for(var i = 0; i < time.length; i++){
    var cookies = this.multiplyCustomersByCookieAverage();
    this.cookieStorageArray.push(cookies);
  }
};


//This prototype will calculate the cookies per store
NewStoreFunction.prototype.calculatePerStore = function() {
  for(var i = 0; i < this.time.length; i++){
    this.totalCookies = this.totalCookies + this.cookieStorageArray[i];
  }
};

//This function will render the hours row at table top
function renderTimeDisplay(){
  var table = document.getElementById('tableNumbers');
  var row = document.createElement('tr');
  var tableData = document.createElement('td');
  row.appendChild(tableData);

  for (var i = 0; i < time.length; i++){
    var tableDataTime = document.createElement('td');
    tableDataTime.textContent = time[i];
    row.appendChild(tableData);
  }
  var tableDataCityTotal = document.createElement('td');
  tableDataCityTotal.textContent = 'City total: ';
  row.appendChild(tableData);
  table.appendChild(row);
};

NewStoreFunction.prototype.dailyStoreTotal = function() {
  for(var i = 0; i < this.time.length; i++){
    this.totalCookies = this.totalCookies + this.cookieStorageArray[i];
  }
};

//city name plus the sales data


NewStoreFunction.prototype.renderAsTable = function(){
  var table = document.getElementById('tableNumbers');
  var row = document.createElement('tr');
  var tableData = document.createElement('td');
  tableData.textContent = this.name;
  row.appendChild(tableData);

  this.calculatePerHour();
  for(var i = 0; i < time.length; i++) {
    var CookiesHourElement = document.createElement('td');
    CookiesHourElement.textContent = this.cookieStorageArray[i];
    row.appendChild(CookiesHourElement);
  }
  var cookieTotalsAll = document.createElement('td');
  this.calculatePerStore();
  cookieTotalsAll.textContent = this.totalCookies;
  row.appendChild(cookieTotalsAll);
  table.appendChild(row);
};
//totals on the bottom row for each hour
function renderTotalsBottomRow(){
  var table = document.getElementById('tableNumbers');
  var row = document.createElement('tr');
  var tableData = document.createElement('td');
  tableData.textContent = 'Hourly all locations';
  row.appendChild(tableData);

  var grandTotal = 0;
  for (var i = 0; i < time.length; i++){
    var newTotal = 0;
    for (var j = 0; j < storesPush.length; j++){
      grandTotal += storesPush[j].cookieStorageArray[i];
      newTotal += storesPush[j].cookieStorageArray[i];
    }
    var tableCell = document.createElement('td');
    tableCell.textContent = newTotal;
    row.appendChild(tableData);
  }
  var potato = document.createElement('tfoot');
  potato.textContent = grandTotal;
  row.appendChild(potato);
  table.appendChild(row);
}
// var tableData = document.createElement('tfoot');
// tableData.textContent = grandTotal;
// row.appendChild(tableData);
// table.appendChild(row);

// var tableFoot = document.createElement('tfoot');
// tableFoot.appendChild(row);
// table.appendChild(tableFoot);


new NewStoreFunction('Seattle', 23, 65, 6.5);
new NewStoreFunction('Tokyo', 3, 24, 1.2);
new NewStoreFunction('Dubai', 11, 38, 3.7);
new NewStoreFunction('Paris', 20, 38, 2.3);
new NewStoreFunction('Lima', 2, 16, 4.6);

renderTimeDisplay();
for(var i = 0; i < storesPush.length; i++){
  storesPush[i].renderAsTable();
}
renderTotalsBottomRow();



// var inputNewStoreForm = document.getElementById('makeNewStore');
// inputNewStoreForm.addEventListener('submit', makeNewStore);
// function makeNewStore(event) {
//   event.preventDefault();
//   console.log(event);

//   var newName = event.target.storeName.value;
//   var newMin = event.target.Min.value;
//   var newMax = event.target.Max.value;
//   var newAvgCookies = event.target.average.value;
//   var newStore = new Store(newName, newMin, newMax, newAvgCookies);
//   newStore.renderCityName();
//   console.log(newStore);
// }
//render table here
