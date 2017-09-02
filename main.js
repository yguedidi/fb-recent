(function ($) {
  $(document).on('click', 'a', function(e) {
    setTimeout(function () {
      main(window.location.href);
    }, 0);
  });

  main(window.location.href);

  function main(currentUrl) {
    if (currentUrl === 'https://www.facebook.com/?sk=h_chr' || currentUrl === 'https://www.facebook.com/?sk=h_nor') {
      return; // forced sort, do nothing
    }
  
    if (currentUrl !== 'https://www.facebook.com/' && currentUrl !== 'https://www.facebook.com/?sk=nf') {
      return; /// not the homepage
    }
  
    window.location = '/?sk=h_chr';
  }
})(jQuery.noConflict());
