$(document).ready(function() {
  
  var buttons = ['java', 'coffee', 'espresso'];

  function drawButtons() {
    $('#button-display').empty();
    for(var i = 0; i < buttons.length; i++) {
      var btn = $('<button>');
        btn.attr('data-value', buttons[i]);
        btn.text(buttons[i]);
        btn.addClass('btn btn-success');
      $('#button-display').append(btn);
    }
  }

  $('#submit').on('click', function(event) {
    event.preventDefault();
    var btnContext = $('#new-button').val().trim();
      $('#new-button').val('');
    buttons.push(btnContext);
    drawButtons();
    console.log(btnContext);
  })

  $(document).on('click', '.btn-success', function() {
    console.log($(this).attr('data-value'));
  })

  // need ajax request

  // need api format

  // need input added to buttons arr

  // need to append new buttons

  drawButtons();

})