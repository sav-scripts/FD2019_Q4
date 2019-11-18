"use strict";(function(){

    var $doms = {},
        _funcDic = {},
        _isInit = false;

    var self = window.Detail =
    {
        init: function()
        {
            if(_isInit) return;
            _isInit = true;

            $doms.container = $("#detail");


            $doms.container.find(".deco-7").on("click", function(event)
            {
                event.preventDefault();



                gtag('event', 'click', {
                    'event_category': "Q42019_rtb",
                    'event_label': "Q42019_film"
                });

                //_funcDic.playIntro();
                VideoPlayer.play("kv");
            });

            // animation
            (function(){

                var $doctor = $doms.container.find(".deco-5"),
                    $elem = $doms.container.find(".deco-4"),
                    $deco1 = $doms.container.find(".content .deco-1"),
                    $title = $doms.container.find(".detail-title"),
                    $deco3 = $doms.container.find(".deco-3"),
                    $sign = $doms.container.find(".deco-6"),
                    $video = $doms.container.find(".deco-7");

                var $bgDeco1 = $doms.container.find(".deco-left .deco-1"),
                    $bgDeco2 = $doms.container.find(".deco-left .deco-2"),
                    $bgDeco3 = $doms.container.find(".deco-right .deco-1"),
                    $bgDeco4 = $doms.container.find(".deco-right .deco-2");

                setupBgTween($bgDeco1);
                setupBgTween($bgDeco2, 30, 30);
                setupBgTween($bgDeco3);
                setupBgTween($bgDeco4, 30, 30);

                function setupBgTween($clip, minLength, rndLength)
                {
                    var setting =
                    {
                        minLength: minLength? minLength: 20,
                        rndLength: rndLength? rndLength: 20,
                        startDeg: Math.random() * 360,
                        coin: 1
                    };

                    playBgClip($clip, setting)
                }

                function playBgClip($clip, setting)
                {
                    var duration = 4 + Math.random() * 1.5,
                        lenfth = setting.minLength + Math.random() * setting.rndLength,
                        deg = setting.startDeg + (setting.coin * (Math.random() * 30 + 30)),
                        arc = deg / 180 * Math.PI,
                        tx = lenfth * Math.cos(arc),
                        ty = lenfth * Math.sin(arc),
                        tAlpha = Math.random()*.8 + .2;

                    setting.coin *= -1;
                    setting.startDeg = deg;

                    var tl = new TimelineMax;
                    tl.to($clip, duration, {marginLeft: tx, marginTop: ty, opacity: tAlpha, ease:Linear.easeNone});

                    tl.add(function()
                    {
                        playBgClip($clip, setting);
                    });
                }



                var tl = new TimelineMax;
                tl.set($doctor, {autoAlpha:0, marginLeft: 0});
                tl.set($elem, {scale:.3, autoAlpha: 0});
                tl.set($deco1, {autoAlpha: 0, marginTop: 100});
                tl.set($deco3, {autoAlpha: 0, marginTop: -100});

                tl.add(ImageTextEffect.textIn1Reset($title));

                tl.set($sign, {autoAlpha: 0, marginLeft: 100});
                tl.set($video, {autoAlpha: 0, marginTop: 100});

                tl.to($elem, 1.1,{scale: 1, autoAlpha: 1, ease: Expo.easeIn});
                tl.to($doctor,.9,{autoAlpha:1, marginLeft: 0, ease:Power3.easeIn}, "-=.9");


                tl.add(ImageTextEffect.textIn1($title));

                tl.to($deco1,.4,{autoAlpha: 1}, "-=.4");
                tl.to($deco3,.4,{autoAlpha: 1}, "-=.4");
                tl.to($deco1, 1, {marginTop: 0, ease:Back.easeOut}, "-=.4");
                tl.to($deco3, 1, {marginTop: 0, ease:Back.easeOut}, "-=1");

                tl.to($video,.5,{autoAlpha: 1, marginTop: 0}, "-=.1");
                tl.to($sign,.5,{autoAlpha: 1, marginLeft: 0}, "-=.3");

                tl.pause();

                _funcDic.playIntro = function()
                {
                    tl.restart();
                }


            }());

            var id = "detail-intro";
            ScrollListener.addListener(id, function()
            {
                //var result = ScrollListener.testDomFromMiddle($doms.container[0], -300, 300);
                var result = ScrollListener.testDom($doms.container[0], 150, -150);

                //console.log(result);

                if(result.topInside || result.bottomInside)
                {
                    gtag('config', _GA_ID_, {
                        'page_title' : "Q42019_rtb"
                    });

                    _funcDic.playIntro();
                    ScrollListener.removeListener(id);
                }
            });
        },

        resize: function()
        {
            var vp = Main.viewport;

            $doms.container.css("height", vp.height);
        }
    };

}());
