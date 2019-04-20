var FormView = {

  $form: $('form'),
  $addRoom: $('.addRoom'),
  $roomSelect: $('#rooms select'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    FormView.$addRoom.on('click', FormView.handleNewRoom);
    FormView.$roomSelect.on('change', FormView.handleRoomSelect);
  },

  handleSubmit: function(event) {
   
    // Stop the browser from submitting the form
    var message = $('#message')[0].value;
    var roomname = $('#rooms select')[0].value;

    Parse.create(new Messages(App.username, message, roomname))
   
    $('#chats').empty();
    MessagesView.initialize();
    event.preventDefault();
    
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },

  handleNewRoom: function(event) {
    var newRoom = prompt('Add New Room');
    RoomsView.renderRoom(newRoom);
  },

  handleRoomSelect: function(event) {
    console.log('Click!');
    var selectedRoom = $('#rooms select')[0].value;
    $('#chats').empty();
    App.fetch(function(dataObj) {
      for (var key in dataObj.results){
        if (dataObj.results[key].roomname === selectedRoom) {
          MessagesView.renderMessage(dataObj.results[key])
        }
      }
    })
    event.preventDefault();
  }

};