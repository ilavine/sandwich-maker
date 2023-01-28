const media = $('.media-body'); 

$('.btn-submit').click( function() {
    media.append(`<h4>Todo: display username</h4> <p> ${$('#user-comment').val()} </p>`);
});

