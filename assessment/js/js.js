$(document).ready(function() {
    var $window = $(window),
        $sticky = $('#sticky'),
        $stickyAnchor = $('#stickyAnchor');

    // Runs on scroll event.
    $window.scroll(function() {
        var window_top = $window.scrollTop();
        var div_top = $stickyAnchor.offset().top;
        if (window_top > div_top) {
            // Make the div sticky.
            $sticky.addClass('stick');
            $stickyAnchor.height($sticky.height());
        } else {
            // Unstick the div.
            $sticky.removeClass('stick');
            $stickyAnchor.height(0);
        }
    });
});