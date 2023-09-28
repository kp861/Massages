document.addEventListener('DOMContentLoaded', function() {
  window.onload = function() {
    const body = document.body;
    if (body.classList.contains('index-body'))
     {
      const homeMiddle = document.querySelector('.home-middle');
      homeMiddle.style.transition = 'opacity 2s'; // Adjust the duration here (e.g., 2s for 2 seconds)
      homeMiddle.style.opacity = '1';
    }
    else
    {
      const CarousLoad = document.querySelector('.carousel');
      CarousLoad.style.transition = 'opacity 1s'; // Adjust the duration here (e.g., 1s for 1 second)
      CarousLoad.style.opacity = '1';
    }
  }

});

