// Your JavaScript here
// we need a cookie object with attributes of type, cooktime, baketime
// add cookie object to prep table 
// each cookie will be a <li>
// what is the doneness level of my cookie?
// what batches of cookies are in my oven
// what type of cookie am i?


function Cookie(cookieType, bakeTime){
  this.cookieType = cookieType;
  this.bakeTime = bakeTime;
  this.cookedFor = 0;
  this.cookedState = "raw";
};
 Cookie.prototype.cook = function(){
    this.cookedFor++;
}

var Oven = {
  ovenRack: [],

  bake: function(){
    // for each cookie object in in the ovenRack increment cookedFor by 1
    for (var i = 0; i < this.ovenRack.length; i++) {
      cookie = this.ovenRack[i];
      cookie.cook();
    }
  },
  addToRack: function(cookie){
    this.ovenRack.push(cookie)
  }
}

var PrepTable = {
  tableArray: [],

  addToTable: function(cookie){
    this.tableArray.push(cookie)
  }
};

var CreateBatch = function(tray){
  var type = tray.find("input[name='batch_type']").val();
  var time = tray.find("input[name='bake_time']").val();
  var cookie = new Cookie(type, time);
  var button = "<button id='add_to_oven'>Add to Oven</button>"
  $('#prep_batches').append("<li>" + cookie.cookieType + button + "</li>")

  PrepTable.addToTable(cookie);
};

$(document).ready(function(){
  $('form').on('submit', function(event){
    event.preventDefault();
    CreateBatch($(this));
  });

  $('#prep_batches').on('click', function(){
    console.log($(this).text());
  });
});

//prepTable delete function
//take object off prepTable add it to oven
// bind to click events to add cookie to oven
// bind to click events to cook cookies
