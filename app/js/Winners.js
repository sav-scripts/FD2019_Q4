/**
 * Created by sav on 2019/11/4.
 */
(function(){

    var $doms = {},
        _isInit = false;

    var self = window.Winners =
    {
        init: function()
        {
            if(_isInit) return;
            _isInit = true;

            var id = "#winners";

            var $container = $doms.container = $(id);

            PopupMangaer.regist(id, $container,
                {
                    containerColor: "linear-gradient(0deg, rgba(76,3,97,1) 88%, rgba(129,26,162,1) 100%)",
                    //toggleContainerClass: "under-nav-mode",
                    gtagPage: "Q42019_winners"
                });


            // btn close
            (function(){

                $container.find(".btn-close").on("click", function(event)
                {
                    event.preventDefault();

                    PopupMangaer.close(id, {closeAll: false});
                });

                ScrollListener.addListener(id, function(bound)
                {
                    var triggerV2 = (bound.top > 120);

                    $doms.container.toggleClass("v2-mode", triggerV2);

                }).update();

            }());
        }
    };

}());