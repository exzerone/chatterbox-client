var MessagesView = {
  
  $chats: $('#chats'),
  
  initialize: function() {
    // debugger;
    App.fetch(function(dataObj){
      for (var key in dataObj.results){
        MessagesView.renderMessage(dataObj.results[key])
      }
    });
    
  },

  renderMessage: function(messageObj) {
      if (messageObj.username){
        var newMessage = MessageView.render(messageObj);
        $('#chats').append(newMessage);  
      }
  }

};