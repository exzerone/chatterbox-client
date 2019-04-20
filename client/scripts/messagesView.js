var MessagesView = {
  
  $chats: $('#chats'),
  
  initialize: function() {
    // debugger;
    var messages = Parse.readAll(function);
    // Render all messages
    for (var key in messages){
      this.renderMessage(messages[key])
    }
  },

  renderMessage: function(messageObj) {
      var newMessage = MessageView.render(messageObj);
      $('#chats').append(newMessage);
  }

};