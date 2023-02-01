const submitComment = async (index) => {
  const media = $('.media-body-' + index);
  console.log(index);
  const text = $('#user-comment-' + index).val();
  const response = await fetch('/api/review', {
          method: 'POST',
          body: JSON.stringify({ text }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  console.log(response);
  media.html(`<p>${text}</p>`);
    
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to create review');
        }

      
};


