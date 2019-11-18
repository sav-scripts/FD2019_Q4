(function (pkg)
{
    "use strict";

    var $doms = {},
        _isInit = false,
        _isHiding = true,
        _videoDic =
        {
            "kv":
            {
                'id': 'lvvLAtGkujs',
                'controls': 1,
                gtagPage: null
            }
        },
        _isPlayerReady = false,
        _player,
        _currentIndex = -1;

    var self = pkg.VideoPlayer =
    {

        init: function (cb)
        {
            if(_isInit)
            {
                if(cb) cb.call();
                return;
            }

            _isInit = true;

            $doms.container = $("#video-player");
            $doms.videoContainer = $doms.container.find(".video-container");

            $doms.btnClose = $doms.container.find(".btn-close").on("click", function(event)
            {
                event.preventDefault();

                self.hide();
            });

            initYouTube(function()
            {
                $doms.container.css("visibility", "visible").css("display", "block").detach();
                if(cb) cb.call();
            });
        },

        play: function(index)
        {

            var obj = _videoDic[index];

            if(!obj)
            {
                alert("影片不存在");
            }
            else if(obj.id === 'ignore')
            {

            }
            else if(!obj.id)
            {
                alert("影片籌備中, 敬請期待");
            }
            else
            {
                if(obj.gtagPage)
                {
                    gtag('config', _GA_ID_, {
                        'page_title' : obj.gtagPage
                    });
                }

                self.show();
                playVideo(index);
            }
        },

        show:function (cb)
        {
            if (!_isHiding) return;
            _isHiding = false;

            //MainPage.setSceneScrollLock(true);

            $("body").append($doms.container);
            $("body, html").toggleClass("no-scroll-mode", true);

            self.resize();

            var tl = new TimelineMax;
            tl.set($doms.container, {autoAlpha: 0});
            tl.to($doms.container, .5, {autoAlpha: 1});
            tl.add(function ()
            {
                $doms.container.toggleClass("open-mode", true);

                if (cb) cb.apply();
            });
        },

        hide: function (cb)
        {
            if (_isHiding) return;
            _isHiding = true;

            self.resize(true);

            //MainPage.setSceneScrollLock(false);

            $doms.container.toggleClass("open-mode", false);
            $("body, html").toggleClass("no-scroll-mode", false);

            var tl = new TimelineMax;
            tl.to($doms.container, .5, {autoAlpha: 0},.4);
            tl.add(function ()
            {
                stopVideo();

                $doms.container.detach();
                if (cb) cb.apply();
            });
        },

        resize: function (forceExecute)
        {
            var width = Main.viewport.width,
                height = Main.viewport.height;

            if(_isHiding && !forceExecute) return;

            var whRatio = 1280 / 720,
                containerWidth,
                containerHeight,
                borderSize = 15,
                bleed = 60;

            if(width <= 640)
            {
                borderSize = 12;
                bleed = 30;
            }

            width -= bleed*2;
            height -= bleed*2;

            if(width/height > whRatio)
            {
                containerHeight = height;
                containerWidth = containerHeight * whRatio;
            }
            else
            {
                containerWidth = width;
                containerHeight = containerWidth / whRatio;
            }

            var contentWidth = containerWidth,
                contentHeight = contentWidth / whRatio;



            if(_isHiding)
            {
                $doms.videoContainer.css
                ({
                    "width": contentWidth,
                    //"left": (Main.viewport.width - (contentWidth+borderSize*2)) * .5
                    "left": (Main.viewport.width - (contentWidth)) * .5
                    //"height": '',
                    //"top": ''
                });


                TweenMax.to($doms.videoContainer, .3, {top:"50%", height:0});
            }
            else
            {
                $doms.videoContainer.css
                ({
                    "width": contentWidth,
                    //"left": (Main.viewport.width - (contentWidth+borderSize*2)) * .5
                    "left": (Main.viewport.width - (contentWidth)) * .5
                    //"height": contentHeight,
                    //"top": (Main.viewport.height - (contentHeight+borderSize*2)) * .5
                });

                TweenMax.to($doms.videoContainer, .4, {top:(Main.viewport.height - (contentHeight+borderSize*2)) * .5, height:contentHeight, ease:Power1.easeIn});
            }

        }
    };

    function initYouTube(cb)
    {
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/player_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


        window.onYouTubePlayerAPIReady = function()
        {
            _isPlayerReady = true;
            //playVideo(_currentIndex);
            cb.call();
        };
    }

    function playVideo(index)
    {
        if(!_isPlayerReady) return;

        if(_videoDic[index].id == '')
        {
            alert('影片尚未開放，敬請期待');
            return;
        }

        _currentIndex = index;

        //updateThumbs();

        if(_player) _player.destroy();

        //console.log("check: " + _currentIndex);

        var controls = _videoDic[_currentIndex].controls || 0;

        _player = new YT.Player('ytplayer', {

            videoId: _videoDic[_currentIndex].id,

            playerVars:
            {

                modestbranding: 1,
                rel: 0,
                'autoplay': 1,
                'controls': controls
            }
        });
    }

    function stopVideo()
    {
        if(_player)
        {
            _player.destroy();
            _player = null;
        }
    }

}(window));
