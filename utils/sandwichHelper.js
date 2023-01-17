// array of sandwich objects for the slides

const slideData = [
    { imageUrl: 'https://unsplash.com/photos/Gg5-K-mJwuQ', caption: 'Sandwich 1' },
    { imageUrl: 'https://unsplash.com/photos/Gg5-K-mJwuQ', caption: 'Sandwich 2' },
    { imageUrl: 'https://unsplash.com/photos/Gg5-K-mJwuQ', caption: 'Sandwich 3' }
  ];

slideData.forEach(function(slide, index) {
    slide.isActive = index === 0;
});