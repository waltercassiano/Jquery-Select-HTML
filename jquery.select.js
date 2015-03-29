+function ($) {

    'use strict';
    /**
    * noSelect plugin, very slightly modified
    * http://mths.be/noselect v1.0.3
    *
    * @param jQuery $elem Element that we don't want to select
    * @param Object options Uniform options for the element
    */
    function noSelect ($element) {

        var none = 'none';
        $element.bind('selectstart dragstart mousedown', function() {
            return false;
        }).css({
            'MozUserSelect': none,
            'msUserSelect': none,
            'webkitUserSelect': none,
            'userSelect': none
        });
    }

    $.fn.selectBox = function(){
        return this.each(function(){

            var $this = $(this);
            var title = $this.find(":selected").html();
            var $divWrapper = $("<div class='selector'></div>");
            var $span = $('<span></span>');

            $span.html($this.find(":selected").html());
            $this.wrap($divWrapper)
            .before($span)
            .change(function(){
                $span.html($this.find(":selected").html());
            })
            .on('click touchend', function() {
                // IE7 and IE8 may not update the value right
                // until after click event - issue #238
                var selHtml = $this.find(":selected").html();

                if ($span.html() !== selHtml) {
                // Change was detected
                // Fire the change event on the select tag
                $this.trigger('change');
            }
            }).on('keyup', function() {
                $span.html($this.find(":selected").html());
            });
            noSelect($span);
        });
    };
}(jQuery);


