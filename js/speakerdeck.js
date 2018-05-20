(function(){
    'use strict';

    var mainContainer = document.querySelector('#talk .container');
    var slideContainer = document.querySelector('#slides_container');
    mainContainer.prepend(slideContainer);

    var iframe = document.querySelector('.speakerdeck-iframe');
    var initialWidth = parseInt(iframe.style.width);
    var initialHeight = parseInt(iframe.style.height);
    var fullWidth = mainContainer.offsetWidth;

    iframe.style.width = fullWidth + 'px';
    iframe.style.height = fullWidth * (initialHeight / initialWidth) + 'px';

})();
