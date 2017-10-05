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
    var btnVal = $(this).attr('data-value');
    // console.log(btnVal);
    var queryUrl = 'http://api.giphy.com/v1/gifs/search?q=' + btnVal + '&limit=10&api_key=cxfIQfJBUKH9fFxsLp5sSwLBOICRb8Ud';
    // console.log(queryUrl);

    $.ajax({
      url: queryUrl,
      method: 'GET'
    }).done(function(obj) {
      console.log(obj.data);
      for(var i = 0; i < obj.data.length; i++){
        var current = obj.data[i].images
        var still = current.original_still.url;
        var live = current.original.url;
        console.log(current);
        
      }
    })
  })

  drawButtons();

})