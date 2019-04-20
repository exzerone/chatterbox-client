var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
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
  }

};