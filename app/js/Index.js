(function(){

    var $doms = {},
        _funcDic = {},
        _isInit = false;

    var self = window.Index =
    {
        init: function()
        {
            if(_isInit) return;
            _isInit = true;

            $doms.container = $("#index");
            $doms.contents = $doms.container.find(".contents");

            $doms.light1 = $doms.container.find(".light-1");

            $doms.container.find(".deco-6").on("click", function(event)
            {
                event.preventDefault();

                gtag('event', 'click', {
                    'event_category': "Q42019_index",
                    'event_label': "Q42019_go"
                });

                MainPage.scrollToContent("/Questionnaire");
            });

            $doms.container.find(".btn-coupon-1").on("click", function(event)
            {
                event.preventDefault();



                gtag('event', 'click', {
                    'event_category': "Q42019_index",
                    'event_label': "Q42019_coupon"
                });

                PopupMangaer.open("#coupon");
            });

            $doms.container.find(".btn-coupon-2").on("click", function(event)
            {
                event.preventDefault();

                gtag('event', 'click', {
                    'event_category': "Q42019_index",
                    'event_label': "Q42019_product"
                });

                var $dom = $(this),
                    href = $dom.attr("href"),
                    t = $dom.attr("target") || "_blank";

                if(href) window.open(href, t);

                //PopupMangaer.open("#popup-questionnaire-step3");
                //window.open("https://bit.ly/2Oclysd", "_blank");
            });

            // users
            (function(){

                var currentIndex = 0,
                    pauseDuration = 3,
                    isStarted = false,
                    isLocking = false,
                    settting =
                    {
                        1:
                        {
                            arrow: 1
                        },
                        2:
                        {
                            arrow: 1
                        },
                        3:
                        {
                            arrow: 1
                        },
                        4:
                        {
                            arrow: 1
                        },
                        5:
                        {
                            arrow: 0
                        }
                    },
                    numUsers = 5;

                var $container = $doms.container.find(".users"),
                    $border = $container.find(".border"),
                    $arrowDown = $container.find(".arrow-down");

                _funcDic.userPlayStart = function()
                {
                    if(isStarted) return;
                    isStarted = true;

                    toNext();
                };

                createBorder($container);
                createCircleBorder($container);



                for(var i=1;i<=numUsers;i++){ setupOne(i) }

                resetArrow();

                //toNext();

                function setupOne(index)
                {
                    var obj = settting[i],
                        $image = obj.$image = $container.find(".p-" + index),
                        $text = obj.$text = $container.find(".text-" + index);

                    $image.css("display", "none");
                    $text.css("display", "none");
                }

                function resetArrow()
                {
                    TweenMax.set($arrowDown, {backgroundPosition: "100% 100%", width: 0, height: 0});
                }

                function playArrow()
                {
                    var tl = new TimelineMax;
                    tl.set($arrowDown, {backgroundPosition: "100% 100%", width: 0, height: 0});
                    tl.to($arrowDown, 1, {width:"100%", height:"100%", ease:Power3.easeIn});
                }

                function toNext()
                {
                    if(isLocking) return;

                    isLocking = true;

                    var oldIndex = currentIndex;

                    currentIndex ++;
                    if(currentIndex > numUsers) currentIndex = 1;

                    var oldObj = settting[oldIndex],
                        newObj = settting[currentIndex];

                    resetArrow();

                    var tl = new TimelineMax;

                    tl.set(newObj.$text, {marginLeft: 100, opacity:0, display: "block"});
                    tl.set(newObj.$image, {attr: {y:50}, opacity:0, display: "block"});

                    if(oldObj)
                    {
                        tl.to(oldObj.$text,.4,{marginLeft: -50, opacity: 0, ease:Power1.easeOut});
                        tl.to(oldObj.$image,.4,{attr: {y:50}, opacity: 0, ease:Power1.easeOut}, "-=.4");

                        tl.add(function()
                        {
                            oldObj.$image.css("display", "none");
                            oldObj.$text.css("display", "none");
                        })
                    }


                    tl.to(newObj.$image,.5, {attr: {y:0}, opacity:1, ease:Power3.easeOut});
                    tl.to(newObj.$text, 1, {marginLeft: 0, opacity:1, ease:Back.easeOut}, "-=.1");

                    if(newObj.arrow == 1)
                    {
                        tl.add(playArrow, "-=1");
                    }

                    tl.add(function()
                    {
                        isLocking = false;


                        TweenMax.delayedCall(pauseDuration, function()
                        {
                            toNext();

                        });
                    });


                }

            }());



            //TweenMax.set($content, {scale:.6});


            // stage in
            (function(){

                //return;



                var $light1 = $doms.container.find(".light-1"),
                    $light2 = $doms.container.find(".light-2"),
                    $shadow = $doms.container.find(".deco-3"),
                    $product = $doms.container.find(".deco-2"),
                    $title = $doms.container.find(".deco-1"),
                    $subTitle2 = $doms.container.find(".deco-4"),
                    $subTitle = $doms.container.find(".deco-5"),
                    $detail = $doms.container.find(".deco-7"),
                    $users = $doms.container.find(".users"),
                    $coupon1 = $doms.container.find(".btn-coupon-1"),
                    $coupon2 = $doms.container.find(".btn-coupon-2"),
                    $btnStart = $doms.container.find(".deco-6");

                var tl = new TimelineMax;



                tl.set($light1, {autoAlpha: 0});
                tl.set($shadow, {autoAlpha: 0});
                tl.set($product, {autoAlpha: 0, marginLeft:200});

                tl.set($light2, {scale: 0, rotation:-30, marginLeft:-5, marginTop: 2});
                tl.set($subTitle, {autoAlpha: 0, marginTop: 100});
                tl.set($subTitle2, {autoAlpha: 0, marginTop: -100});

                //tl.set($title, {autoAlpha: 0});
                tl.add(ImageTextEffect.textIn1Reset($title));

                tl.set($users, {autoAlpha: 0, marginLeft: -100});

                tl.set($btnStart, {autoAlpha: 0, marginTop: 50});
                tl.set($detail, {autoAlpha: 0, marginTop: 50});

                tl.set([$coupon1[0], $coupon2[0]], {marginLeft: 100});

                tl.to($product,.4, {autoAlpha: 1});
                tl.to($product,1, {marginLeft: 0, ease:Back.easeOut}, "-=.4");

                tl.to([$light1[0], $shadow[0]],.1,{autoAlpha:1}, "-=.1");

                //tl.to($title,.5,{autoAlpha: 1});

                //var indexTextTl = ImageTextEffect.textIn1($title);

                //tl.set($title, {autoAlpha:1});
                tl.add(ImageTextEffect.textIn1($title));

                tl.to($light2,.8, {scale:1, rotation: 0, marginLeft:-0, marginTop: 0, ease:Power3.easeIn});

                tl.to($subTitle,.4,{autoAlpha: 1}, "-=.8");
                tl.to($subTitle2,.4,{autoAlpha: 1}, "-=.8");
                tl.to($subTitle, 1, {marginTop: 0, ease:Back.easeOut}, "-=.8");
                tl.to($subTitle2, 1, {marginTop: 0, ease:Back.easeOut}, "-=1");

                tl.to($btnStart,.4,{autoAlpha:1}, "-=.3");
                tl.to($btnStart, 1, {marginTop: 0, ease:Back.easeOut}, "-=.4");
                tl.to($detail,.4,{autoAlpha:1}, "-=.8");
                tl.to($detail, 1, {marginTop: 0, ease:Back.easeOut}, "-=.8");


                tl.to($users,.4, {autoAlpha:1, marginLeft: 0}, "-=.5");
                tl.add(function()
                {
                    _funcDic.userPlayStart();
                }, "-=.1");

                tl.to([$coupon1[0], $coupon2[0]],.4, {marginLeft: 0}, "-=0");

                tl.pause();

                _funcDic.playIntro = function()
                {
                    tl.restart();
                }


            }());

            var id = "index-intro";
            ScrollListener.addListener(id, function()
            {
                //var result = ScrollListener.testDomFromMiddle($doms.container[0], -300, 300);

                var result = ScrollListener.testDom($doms.container[0], 150, -150);

                //console.log(result);

                if(result.topInside || result.bottomInside)
                {
                    gtag('config', _GA_ID_, {
                        'page_title' : "Q42019_index"
                    });

                    _funcDic.playIntro();
                    ScrollListener.removeListener(id);
                }
            });

            //ScrollListener.addListener(id, function()
            //{
            //    var result = ScrollListener.testDomFromMiddle($doms.container[0], -100, 100);
            //
            //    //var result = ScrollListener.testDom($doms.container[0], 150, -150);
            //
            //    console.log(result);
            //
            //    if(result.topInside && result.bottomInside)
            //    {
            //
            //        _funcDic.playIntro();
            //        ScrollListener.removeListener(id);
            //    }
            //});
        },

        resize: function()
        {
            var vp = Main.viewport;

            //if(vp.index === 0)
            //{
            //    $doms.container.css("height", vp.height);
            //}
            //else
            //{
            //    $doms.container.css("height", vp.height);
            //}

            //var h = $doms.container.height();
            //$doms.light1.css("top", -h *.5);

            if(vp.index === 0)
            {
                $doms.contents.css("margin-top", "");
                $doms.container.css("height", vp.height);
                $doms.container.css("min-height", "");
                TweenMax.set($doms.contents, {transform: ""});
            }
            else
            {
                $doms.container.css("height", vp.height);

                //var minHeight = 1050,
                var contentHeight = 860,
                    bottomHeight = 270,
                    totalHeight = contentHeight + bottomHeight,
                    rawTotalHeight = totalHeight,
                    minHeight,
                    scale = vp.height / contentHeight,
                    contentOffsetY;

                //console.log(scale);

                scale = Math.min(scale, 1);
                minHeight = totalHeight * scale;

                //console.log(minHeight);

                if(vp.height >= contentHeight && vp.height <= rawTotalHeight)
                {
                    contentOffsetY = -bottomHeight * .5 * ((rawTotalHeight - vp.height) / bottomHeight);

                    //console.log(contentOffsetY);

                    $doms.contents.css("margin-top", contentOffsetY);
                }
                else if(vp.height < contentHeight)
                {
                    contentOffsetY = -bottomHeight * .5 * (vp.height / contentHeight);

                    $doms.contents.css("margin-top", contentOffsetY);
                }
                else
                {
                    $doms.contents.css("margin-top", "");
                }


                $doms.container.css("min-height", minHeight + "px");

                if(scale < 1)
                {
                    //$doms.container.css("min-height", "auto");
                    //$doms.container.css("min-height", "1000px");
                    TweenMax.set($doms.contents, {scale: scale});
                }
                else
                {
                    //$doms.container.css("min-height", "");
                    TweenMax.set($doms.contents, {transform: ""});
                }
            }
        }

    };

    function createBorder($container)
    {
        var d = getD(555, 137, 20);

        var $svg =  $container.find(".border-svg.pc-only");


        var $path = $(document.createElementNS('http://www.w3.org/2000/svg', 'path'))
            .addClass("border")
            .attr({d: d});

        $svg.append($path);
    }

    function createCircleBorder($container)
    {

        var d = getCircleD(338);
        //var d = getCircleD(200);

        var $svg =  $container.find(".border-svg.mobile-only");


        var $path = $(document.createElementNS('http://www.w3.org/2000/svg', 'path'))
            .addClass("border")
            .attr({d: d});

        $svg.append($path);
    }

    function getCircleD(size)
    {
        var r = size * .5,
            sx = 2,
            sy = 2;


        //M 100, 100
        //m -75, 0
        //a 75,75 0 1,0 150,0
        //a 75,75 0 1,0 -150,0

        //var string = "M"

        var startDegree = 150,
            endDegree = 130,
            startArc = Math.PI * 2 * startDegree / 360,
            endArc = Math.PI * 2 * endDegree / 360;

        var startX = Math.cos(startArc) * r + r + sx,
            startY = Math.sin(startArc) * r + r + sy,
            endX = Math.cos(endArc) * r + r,
            endY = Math.sin(endArc) * r + r;

        var dx1 = endX - startX,
            dy1 = endY - startY;

        var pointX = 0,
            pointY = r + r * .8;

        var d = "M"+startX+","+startY+" a"+r+","+r+" 0 1 1 "+dx1+","+dy1+" ";

        d += "l "+(pointX-endX)+","+(pointY-endY)+" ";
        d += "l "+(startX-pointX)+","+(startY-pointY)+" ";

        //console.log("hr: " + r);
        //console.log("startArc: " + startArc);
        //console.log(Math.cos(startArc));
        //console.log("start at: " + startX + ", " + startY);
        //console.log("end at: " + endX + ", " + endY);



        //return "M100,100 m-75,0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0";
        return d;
    }

    function getD(width, height, r)
    {
        var sx = 2,
            sy = 2,
            h = width - (r + sx) * 2,
            v = height - (r + sy) * 2;

        return "M"+(r+sx)+","+sy+" h"+h+" a"+r+","+r+" 0 0 1 "+r+","+r+" v"+v+" a"+r+","+r+" 0 0 1 -"+r+","+r+" h-"+h+" a"+r+","+r+" 0 0 1 -"+r+",-"+r+" v-"+v+" a"+r+","+r+" 0 0 1 "+r+",-"+r+" z";
    }

}());



