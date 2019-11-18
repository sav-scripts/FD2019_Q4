/**
 * Created by sav on 2019/10/14.
 */

"use strict";

(function(){

    var $doms = {},

        _isInit = false,

        _sceneScrollLocking = false,
        _lockingScrollTop,

        _hashDic =
        {
            "/Index":
            {
                contentId: "#index"
            },

            "/Questionnaire":
            {
                contentId: "#questionnaire",
                scrollOffset:
                {
                    0: -120,
                    1: 0
                }
            }
        };

    var self = window.MainPage =
    {
        init: function()
        {
            if(_isInit) return; _isInit = true;

            $doms.container = $("#main-page");
            $doms.scrollLockWrapper = $doms.container.find(".scroll-lock-wrapper");

            //ScrollListener.addListener('MainPage', function()
            //{
            //
            //}).update("MainPage");

            VideoPlayer.init();

            Index.init();
            Detail.init();
            Questionnaire.init();


            // hide main loading
            (function(){

                var $loading = $("#main-loading");

                //return;

                var tl = new TimelineMax;
                tl.to($loading,.5, {autoAlpha: 0, ease:Power1.easeOut});
                tl.add(function()
                {
                    $loading.detach();

                });

            }());

            ScrollListener.active();
        },


        setSceneScrollLock: function(b)
        {
            if(_sceneScrollLocking === b) return;
            _sceneScrollLocking = b;

            if(_sceneScrollLocking)
            {
                _lockingScrollTop = $(window).scrollTop();

                //console.log("_lockingScrollTop = " + _lockingScrollTop);
                /*
                 $('body').css
                 ({
                 "min-height": "auto",
                 "overflow": "hidden"
                 });
                 */

                $doms.container.toggleClass("scroll-lock-mode", true);
                $doms.scrollLockWrapper.css("top", -_lockingScrollTop);
            }
            else
            {
                /*
                 $('body').css
                 ({
                 "min-height": "",
                 "overflow": ""
                 });
                 */
                $doms.container.toggleClass("scroll-lock-mode", false);
                $doms.scrollLockWrapper.css("top");

                window.scrollTo($(window).scrollLeft(), _lockingScrollTop);

                //Nav.updateNavLabel(bound);
            }
        },

        scrollToContent: scrollToContent,

        resize: function()
        {
            if(!_isInit) return;

            //if(!window._META_VIEWPORT_SUPPORTED_)
            //{
            //    var w = Main.viewport.width,
            //        sceneMinWidth = 1400;
            //
            //    if(w > 640 && w < sceneMinWidth)
            //    {
            //        $doms.container.css("left", "50%");
            //        $doms.container.css("margin-left", -sceneMinWidth *.5);
            //
            //        //$doms.scrollLockWrapper.css("margin-left", (w-1920) *.5);
            //    }
            //    else
            //    {
            //        $doms.container.css("left", "");
            //        $doms.container.css("margin-left", "");
            //
            //        //$doms.scrollLockWrapper.css("margin-left", "");
            //    }
            //}


            Index.resize();
            Detail.resize();
            Questionnaire.resize();

            VideoPlayer.resize();

            ScrollListener.update();
        }
    };



    function scrollToContent(hash)
    {
        if(_hashDic[hash])
        {
            var obj = _hashDic[hash],
                $content = $(obj.contentId);


            if($content[0])
            {
                var targetScrollTop = $content.position().top;

                if(obj.scrollOffset !== undefined)
                {
                    var vIndex = Main.viewport.index;
                    targetScrollTop += obj.scrollOffset[vIndex];
                }

                if(_sceneScrollLocking)
                {
                    _lockingScrollTop = targetScrollTop;
                }
                else
                {
                    //console.log(targetScrollTop);
                    ScrollListener.scrollTo(targetScrollTop, null, 2000);
                }
            }
        }
    }

}());