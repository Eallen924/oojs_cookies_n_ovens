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
  },

  render: function(cookie){
    var button = "<button id='add_to_oven'>Add to Oven</button>"
    $('#prep_batches').append("<li >" + cookie.cookieType + button + "</li>")
  }

};

var CreateBatch = function(tray){
  var cookie = new Cookie(tray.type(), tray.time());
  PrepTable.render(cookie)
  PrepTable.addToTable(cookie);
  tray.clear();

};

var Tray = function($tray){
  this.$tray = $tray
}

Tray.prototype.type = function(){
  return this.$tray.find("input[name='batch_type']").val();     
}

Tray.prototype.time = function(){
  return this.$tray.find("input[name='bake_time']").val();     
}

Tray.prototype.clear = function(){
  this.$tray.find("input[name='batch_type']").val('');     
  this.$tray.find("input[name='bake_time']").val('');     
}

$(document).ready(function(){
  $('form').on('submit', function(event){
    event.preventDefault();
    CreateBatch(new Tray($(this)));
  });

  $('body').on('click', '#prep_batches li button', function(){
    console.log($(this).text());
  });
});

// prepTable delete function
// take object off prepTable add it to oven
// bind to click events to add cookie to oven
// bind to click events to cook cookies
