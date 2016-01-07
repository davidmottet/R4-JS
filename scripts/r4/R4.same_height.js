/*(function ($) {
  var tab_elem, max_height;

  function init () {
    max_height = 0;
    tab_elem = $('.views-row .row-wrapper-border');
    $('.views-row .row-wrapper-border').css('height', '');

    size();
  }

  function size () {
    for (var i = 0; i < $(tab_elem).length; i++) {
      var elem = $(tab_elem[i]);
      
      if($(tab_elem[i]).height() > max_height) {
        max_height = $(tab_elem[i]).height();
      };
    };
    $('.views-row .row-wrapper-border').css('height', max_height+30+'px')
  }
  if($('.view-phototheque-ecotourisme').length) {
    if(window.innerWidth > 580){
      init();
    }else{
      $('.views-row .row-wrapper-border').css('height', '')
    }
    $(window).on('resize', function () {
      if(window.innerWidth > 580){
        init();
      }else{
        $('.views-row .row-wrapper-border').css('height', '')
      }
    })
  };
})(jQuery);*/

//Exemple for futur module
