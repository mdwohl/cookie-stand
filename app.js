'use strict'
//Matt Petersen & I pair programmed a lot of this. He helped quite a bit with setup and troubleshooting.
function getRandomInt(max){
  return Math.floor(Math.random() * Math.floor(max))
}
//Seattle shop statistics
var avgCookies = {
  min: 23,
  max: 65,
  avgCookies: 6.5,
  startingCookies: 0,
  city: 'Seattle',
  time: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '],
  renderTime: function(){
    var cityList = document.getElementById('seattle');
    var location = document.createElement('li');
    location.textContent = this.city;
    cityList.appendChild(location);
  },
  renderCity: function(){
      for (var i = 0; i < this.time.length; i++){
      var getRandomNumber = getRandomInt(23,65);
      //Line 21 made a new number
      this.startingCookies = this.startingCookies + getRandomNumber;
      var timeList = document.getElementById('seaCookies');
      var timeLine = document.createElement('li');
      timeLine.textContent = this.time[i] + getRandomNumber + ' cookies.';
      timeList.appendChild(timeLine);
      console.log(this.max);
    }
    var cookieTotalEl = document.getElementById('seaTotal');
    var LiEl = document.createElement('li');
    LiEl.textContent = this.startingCookies + ' is the total for this location.';
    cookieTotalEl.appendChild(LiEl);
  }
}
avgCookies.renderTime();
avgCookies.renderCity();

//Tokyo shop statistics
var avgCookies = {
  min: 3,
  max: 24,
  avgCookies: 1.2,
  startingCookies: 0,
  city: 'Tokyo',
  time: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '],
  renderTime: function(){
    var cityList = document.getElementById('tokyo');
    var location = document.createElement('li');
    location.textContent = this.city;
    cityList.appendChild(location);
  },
  renderCity: function(){
      for (var i = 0; i < this.time.length; i++){
      var getRandomNumber = getRandomInt(3,24);
      this.startingCookies = this.startingCookies + getRandomNumber;
      var timeList = document.getElementById('tokCookies');
      var timeLine = document.createElement('li');
      timeLine.textContent = this.time[i] + getRandomNumber + ' cookies.';
      timeList.appendChild(timeLine);
      console.log(this.max);
    }
    var cookieTotalEl = document.getElementById('tokTotal');
    var LiEl = document.createElement('li');
    LiEl.textContent = this.startingCookies + ' is the total for this location.';
    cookieTotalEl.appendChild(LiEl);
  }
}
avgCookies.renderTime();
avgCookies.renderCity();

//Dubai shop statistics

var avgCookies = {
  min: 11,
  max: 38,
  avgCookies: 3.7,
  startingCookies: 0,
  city: 'Dubai',
  time: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '],
  renderTime: function(){
    var cityList = document.getElementById('dubai');
    var location = document.createElement('li');
    location.textContent = this.city;
    cityList.appendChild(location);
  },
  renderCity: function(){
      for (var i = 0; i < this.time.length; i++){
      var getRandomNumber = getRandomInt(11,38);
      this.startingCookies = this.startingCookies + getRandomNumber;
      var timeList = document.getElementById('dubCookies');
      var timeLine = document.createElement('li');
      timeLine.textContent = this.time[i] + getRandomNumber + ' cookies.';
      timeList.appendChild(timeLine);
      console.log(this.max);
    }
    var cookieTotalEl = document.getElementById('dubTotal');
    var LiEl = document.createElement('li');
    LiEl.textContent = this.startingCookies + ' is the total for this location.';
    cookieTotalEl.appendChild(LiEl);
  }
}
avgCookies.renderTime();
avgCookies.renderCity();

//Paris shop statistics

var avgCookies = {
  min: 20,
  max: 38,
  avgCookies: 2.3,
  startingCookies: 0,
  city: 'Paris',
  time: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '],
  renderTime: function(){
    var cityList = document.getElementById('paris');
    var location = document.createElement('li');
    location.textContent = this.city;
    cityList.appendChild(location);
  },
  renderCity: function(){
      for (var i = 0; i < this.time.length; i++){
      var getRandomNumber = getRandomInt(20,38);
      this.startingCookies = this.startingCookies + getRandomNumber;
      var timeList = document.getElementById('parCookies');
      var timeLine = document.createElement('li');
      timeLine.textContent = this.time[i] + getRandomNumber + ' cookies.';
      timeList.appendChild(timeLine);
      console.log(this.max);
    }
    var cookieTotalEl = document.getElementById('parTotal');
    var LiEl = document.createElement('li');
    LiEl.textContent = this.startingCookies + ' is the total for this location.';
    cookieTotalEl.appendChild(LiEl);
  }
}
avgCookies.renderTime();
avgCookies.renderCity();

//Lima shop statistics

var avgCookies = {
  min: 2,
  max: 16,
  avgCookies: 4.6,
  startingCookies: 0,
  city: 'Lima',
  time: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '],
  renderTime: function(){
    var cityList = document.getElementById('lima');
    var location = document.createElement('li');
    location.textContent = this.city;
    cityList.appendChild(location);
  },
  renderCity: function(){
      for (var i = 0; i < this.time.length; i++){
      var getRandomNumber = getRandomInt(23,65);
      this.startingCookies = this.startingCookies + getRandomNumber;
      var timeList = document.getElementById('limCookies');
      var timeLine = document.createElement('li');
      timeLine.textContent = this.time[i] + getRandomNumber + ' cookies.';
      timeList.appendChild(timeLine);
      console.log(this.max);
    }
    var cookieTotalEl = document.getElementById('seaTotal');
    var LiEl = document.createElement('li');
    LiEl.textContent = this.startingCookies + ' is the total for this location.';
    cookieTotalEl.appendChild(LiEl);
  }
}
avgCookies.renderTime();
avgCookies.renderCity();