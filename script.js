document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.carousel-images img');
    const points = document.querySelectorAll('.three-points button');
  
    let index = 0;
  
    function showImage() {
      images.forEach((image) => {
        image.classList.remove('active');
      });
      points.forEach((button) => {
        button.classList.remove('active');
      });
  
      images[index].classList.add('active');
      points[index].classList.add('active');
  
      index++;
      if (index >= images.length) {
        index = 0;
      }
    }
  
    showImage(); // Show the first image initially  
    setInterval(showImage, 5000); // Change image every 5 seconds
  });



