/**
 * Created by sav on 2019/11/5.
 */
(function(){


    var self = window.ImageTextEffect =
    {
        textIn1Reset: function($container)
        {
            $container.css("background", "transparent");

            var $words = $container.find("div");

            var tl = new TimelineMax;
            tl.set($words, {autoAlpha: 0, scale:1.5});

            return tl;
        },

        textIn1: function($container)
        {
            var $words = $container.find("div");

            var tl = new TimelineMax;
            //tl.set($container, {autoAlpha:1});
            tl.staggerTo($words,.5,{autoAlpha:1, scale: 1},.1);

            return tl;
        }
    };

}());