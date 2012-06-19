(function () {
  var hidePromoted = function (callback) {
    $('.js-disclosure').closest('.content').each(function (i, el) {
      $(el).parent().remove();
    });
    $('li.promoted-trend, .js-wtf-module').remove();
    
    return callback;
  };
  $(function () {
    hidePromoted(setInterval(function () {
    }, 200));
  });
})();
