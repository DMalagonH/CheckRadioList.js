(function($){
    var name = "radioList";
    
    var Func = function(){
        var $list;
        var options;
        
        var classes = {
            list:   'radio-list',
            item:   'radio-list-item',
            active: 'active',
            input:  "input[type='radio']"
        };
        
        var init = function () {
            $list.addClass(classes.list);
            $list.find('li').addClass(classes.item);
            $list.find(classes.input).hide();

            initListeners();
        };

        var initListeners = function () {
            $list.on('click', 'li', function (e) {
                e.preventDefault();

                var $item = $(this);
                var $input = $item.find(classes.input);
                var $siblings = $item.siblings();

                $siblings.removeClass(classes.active);
                $item.toggleClass(classes.active);

                $input.prop("checked", !$input.prop("checked"));
                $siblings.find(classes.input).prop("checked", false);
            });
        };
        
        return {
            init: function(element, opts){
                $list = $(element);
                options = opts;

                init();
            }
        };
    };
    
    $.fn[name]= function(options, args){
        var element = this;
        var Plugin = new Func();

        if(Plugin[options]){
            return Plugin[options](args);
        }
        else if(typeof(options) === "object" || !options){

            options = $.extend({}, $.fn[name].defaults, options);

            return Plugin.init(element, options, args);
        }
    };

    $.fn[name].defaults = {};
})(jQuery);