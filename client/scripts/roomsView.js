var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
debugger;
  App.fetch(function(dataObj){
      var array = [];
      for (var key in dataObj.results){
        if (!array.includes(dataObj.results[key].roomname)) {
          array.push(dataObj.results[key].roomname)
        }
        
      }
      for (var i = 0 ; i < array.length; i++) {
        RoomsView.renderRoom(array[i]);
      }
    });
  },

  renderRoom: function(room) {
    var newRoom = RoomView.render(room)
    $('#rooms select').append(newRoom);
  }

};
