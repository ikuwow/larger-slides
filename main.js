(function(){
    'use strict';
    var mainContainer = document.querySelector('div[id="slideview-container"] div[class="row"]');
    var slideContainer = document.querySelector('#main-panel .sectionElements');
    slideContainer.style.marginBottom = '1.25rem';
    mainContainer.prepend(slideContainer);

    slideContainer.querySelector('.presentation_player').style.width = '100%';

    var slide  = slideContainer.querySelector('.presentation_player .stage');
    slide.style.maxHeight = '';
    slide.style.maxWidth = '';
    slide.style.height = '';

})();
