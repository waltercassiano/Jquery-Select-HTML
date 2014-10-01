( function( $ ){
    $.fn.selectBox = function(){
        return this.each(function(){ 
            $(this).css({'position':'absolute'});
            if( $('option:selected', this).val() !== ''  ) 
                title = $('option:selected',this).text();
            $(this).css({'z-index':10,'opacity':0,'-khtml-appearance':'none'})
                   .after('<span class="select" style="position:absolute; width:' + $(this).css('width') +'; padding: 0 0 0 30px;">' + title + '</span>')
                   .change(function(){
                        val = $('option:selected',this).text();
                        $(this).next().text(val);
                    });

        });
    }
})(jQuery);
