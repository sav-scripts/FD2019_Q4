/**
 * Created by sav on 2019/11/3.
 */
(function(){

    var $doms = {},
        _isNavOpen = false;

    var self = window.Nav =
    {
        init: function()
        {

            // trigger
            (function(){

                $doms.container = $("#nav");

                $doms.container.find(".btn-trigger").on("click", function(event)
                {
                    event.preventDefault();

                    self.switchNav(true);
                });

                $doms.container.find(".nav-logo").on("click", function(event)
                {
                    event.preventDefault();

                    PopupMangaer.close(null, function()
                    {
                        MainPage.scrollToContent("/Index");
                    });
                });

            }());


            // container
            (function(){

                $doms.navContainer = $("#nav-container");

                var id = "nav";

                var $container = $doms.navContainer;

                $container.find(".nav-btn-close").on("click", function(event)
                {
                    event.preventDefault();

                    self.switchNav(false, null, false);
                });

                PopupMangaer.regist(id, $container,
                    {
                        containerColor: "rgba(64, 11, 97, 1)",
                        containerOpacity:.95
                    });

            }());

            // buttons
            (function(){

                var $container = $doms.navContainer;

                setupButton(1, function()
                {
                    self.switchNav(false, function()
                    {
                        MainPage.scrollToContent("/Questionnaire");
                    }, true);
                });


                setupButton(2, function()
                {

                    gtag('event', 'click', {
                        'event_category': "Nav",
                        'event_label': "Q42019_rule"
                    });

                    self.switchNav(false, function()
                    {
                        PopupMangaer.open("#rule");
                    }, true);
                });

                setupButton(3, function()
                {
                    gtag('event', 'click', {
                        'event_category': "Nav",
                        'event_label': "Q42019_product"
                    });

                    var $dom = $(this),
                        href = $dom.attr("href"),
                        t = $dom.attr("target") || "_blank";

                    if(href) window.open(href, t);

                    self.switchNav(false, function()
                    {
                    }, true);
                });


                setupButton(4, function()
                {

                    gtag('event', 'click', {
                        'event_category': "Nav",
                        'event_label': "Q42019_coupon"
                    });

                    self.switchNav(false, function()
                    {
                        PopupMangaer.open("#coupon");
                    }, true);
                });

                setupButton(5, function()
                {
                    //alert("2019/12/27公佈");


                    gtag('event', 'click', {
                        'event_category': "Nav",
                        'event_label': "Q42019_winners"
                    });

                    self.switchNav(false, function()
                    {
                        PopupMangaer.open("#winners");
                    }, true);
                });


                function setupButton(index, func)
                {
                    $container.find(".btn-" + index).on("click", function(event)
                    {
                        event.preventDefault();

                        func.call(this);
                    });
                }

            }());

            ScrollListener.addListener("nav", function(bound)
            {
                var triggerV2 = (bound.top > 120);

                $doms.container.toggleClass("v2-mode", triggerV2);

                var scrollLeft = $(window).scrollLeft();

                if(scrollLeft >= 0 && Main.viewport.width <= 1366)
                {
                    $doms.container.css("margin-left", -scrollLeft);
                    $doms.container.css("left", 0);
                }
                else
                {
                    $doms.container.css("margin-left", "");
                    $doms.container.css("left", "");
                }

            }).update();
        },

        switchNav: function(isOpen, cb, closeAll)
        {
            if(isOpen === _isNavOpen) return;
            _isNavOpen = isOpen;

            if(closeAll === undefined) closeAll = false;

            //$doms.navContainer.toggleClass("open-mode", _isNavOpen);
            //MainPage.setSceneScrollLock(_isNavOpen);

            if(_isNavOpen)
            {
                //PopupMangaer.close(null, function()
                //{
                //    PopupMangaer.open("nav", cb);
                //});

                PopupMangaer.open("nav", cb);
            }
            else
            {
                PopupMangaer.close("nav", {cb:cb, closeAll: closeAll});
            }
        }
    };

}());