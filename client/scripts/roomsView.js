var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {

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
    if (room !== undefined){
      var newRoom = {}
      newRoom.room = room;
      newRoom = Room.render(newRoom);
      $('#rooms select').append(newRoom);
    }
  }

};
