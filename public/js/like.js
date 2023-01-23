$('.btn-like').click(function() {
    $('.label').html(function(i, val) { 
      return val*1+1
    });
});


