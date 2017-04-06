/**
 * Created by Administrator on 2017/2/18 0018.
 */
(function ($) {
    //console.log('1111');
    $.fn.rate=function (option) {
        var that=this;
        this.each(function (i,o) {
            var rate=$(o).attr('rate');
            var type=$(o).attr("type")||2;
           rate=parseFloat(rate/type);
           //console.log('rrrrrrrrr',rate);
           $('span',o).each(function (ii,oo) {
               var index=$(oo).index();
               if(index+1<=rate){
                   $(oo).addClass('all');
               }
               if(index+1>rate&&rate>index){
                   $(oo).addClass('half');
               }
           })
        });
        return this;
    }    
})(jQuery)