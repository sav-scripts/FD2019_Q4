/**
 * Created by sav on 2019/8/30.
 */
(function(){

    var $doms = {},
        _isLocking = false,
        _registDic = {},
        _openedDic = {},
        _openedList = [],
        _offsetX = 30,
        _openEase = Power1.easeOut,
        _closeEase = Power1.easeIn,
        _defaultContainerOpacity = 1,
        _defaultContainerColor = "rgba(0, 0, 0, 1)";
        //_defaultContainerColor = "rgba(0, 0, 0, .8)";

    window.Popup = {};

    var self = window.PopupMangaer =
    {
        init: function()
        {
            $doms.container = $("#popup-container");

            $doms.background = $doms.container.find(".popup-background");

            $doms.parent = $("body");

            window.Coupon.init();
            window.Questionnaire.Step3.init();


            $doms.container.detach();

            //self.open("#popup-questionnaire-step3");
            //self.open("#coupon");
        },

        /*

            options:
                onPutIntoScene: execute when open
                toggleContainerClass: toggle this class for container when open
                containerColor: set container background color to this when open
                containerOpacity: set container background opacity to this when open
                gtagPage: track gtag page on open

         */
        regist: function(id, $container, options)
        {
            options = options || {};

            options.id = id;
            options.$container = $container;

            _registDic[id] = options;

            $container.detach();
        },

        open: function(id, cb)
        {
            if(_isLocking) return;

            var obj = _registDic[id];
            if(!obj)
            {
                throw new Error("ppoup id: " + id + " is not registed");
            }
            else if(_openedDic[id])
            {
                console.log("popup id: " + id + " already opened");
                return;
            }

            _isLocking = true;

            if(obj.gtagPage)
            {
                gtag('config', _GA_ID_, {
                    'page_title' : obj.gtagPage
                });
            }

            var tl = new TimelineMax;

            if(_openedList.length === 0)
            {
                tl.set($doms.container, {autoAlpha: 0});
                $doms.parent.append($doms.container);
                tl.to($doms.container, .2, {autoAlpha: 1});
            }

            var topId = getTopPopupId();

            addOpenStatus(id);



            if(topId)
            {
                var topObj = _registDic[topId];

                tl.to(topObj.$container, .25, {autoAlpha: 0, marginLeft: -_offsetX, ease: _closeEase});
                tl.add(function()
                {
                    if(topObj.toggleContainerClass)
                    {
                        $doms.container.toggleClass(topObj.toggleContainerClass, false);
                    }
                    topObj.$container.detach();
                });
            }


            var containerColor = obj.containerColor || _defaultContainerColor,
                containerOpacity = obj.containerOpacity || _defaultContainerOpacity;

            tl.add(function()
            {
                $doms.container.append(obj.$container);
                MainPage.setSceneScrollLock(true);

                window.scrollTo($(window).scrollLeft(), 0);

                if(obj.toggleContainerClass)
                {
                    $doms.container.toggleClass(obj.toggleContainerClass, true);
                }

                //console.log(obj.$container.css("background-color"));

                if(obj.onPutIntoScene)
                {
                    obj.onPutIntoScene.call();
                }
            });
            tl.set(obj.$container, {autoAlpha: 0, marginLeft: _offsetX});

            //tl.to($doms.container, .2, {backgroundColor: containerColor}, "-=.2");
            tl.to($doms.background, .2, {background: containerColor}, "-=.2");
            tl.to($doms.background, .2, {opacity: containerOpacity}, "-=.2");

            tl.to(obj.$container, .25, {autoAlpha: 1, marginLeft: 0, ease: _openEase});
            tl.add(function()
            {
                _isLocking = false;
                if(cb) cb.call();
            });

        },

        /*
            options
                closeAll: close all popups in end

         */
        close: function(id, cbOrOpeions)
        {
            if(_isLocking) return;


            var cb,
                closeAll = false;

            if(cbOrOpeions)
            {
                if(typeof (cbOrOpeions) == "function")
                {
                    cb = cbOrOpeions;
                }
                else
                {
                    cb = cbOrOpeions.cb || null;
                    closeAll = Boolean(cbOrOpeions.closeAll);
                }
            }



            if(!id) id = getTopPopupId();

            if(id)
            {
                var obj = _registDic[id];
                if(!obj)
                {
                    throw new Error("ppoup id: " + id + " is not registed");
                }
                else if(!_openedDic[id])
                {
                    console.log("popup id: " + id + " not in opened dic");
                    return;
                }

                _isLocking = true;

                removeOpenStatus(id);


                var tl = new TimelineMax;
                tl.to(obj.$container, .25, {autoAlpha: 0, marginLeft: -_offsetX, ease: _closeEase});
                tl.add(function()
                {
                    obj.$container.detach();
                });

                if(closeAll)
                {
                    removeAllOpenStatus();
                }
                else
                {


                    var topId = getTopPopupId();
                    if(topId)
                    {
                        var topObj = _registDic[topId];


                        var containerColor = topObj.containerColor || _defaultContainerColor,
                            containerOpacity = topObj.containerOpacity || _defaultContainerOpacity;



                        tl.to($doms.background, .2, {background: containerColor}, "-=.2");
                        tl.to($doms.background, .2, {opacity: containerOpacity}, "-=.2");

                        tl.add(function()
                        {
                            if(topObj.toggleContainerClass)
                            {
                                $doms.container.toggleClass(topObj.toggleContainerClass, true);
                            }

                            $doms.container.append(topObj.$container);
                        });
                        tl.set(topObj.$container, {autoAlpha: 0, marginLeft: _offsetX});

                        tl.to(topObj.$container, .25, {autoAlpha: 1, marginLeft: 0, ease: _openEase});
                    }
                }

                if(_openedList.length === 0)
                {
                    tl.to($doms.container, .2, {autoAlpha: 0}, "-=.2");
                    tl.add(function()
                    {
                        $doms.container.detach();
                    });
                }

                tl.add(function()
                {


                    if(_openedList.length === 0)
                    {
                        MainPage.setSceneScrollLock(false);
                    }

                    if(obj.toggleContainerClass)
                    {
                        $doms.container.toggleClass(obj.toggleContainerClass, false);
                    }

                    _isLocking = false;
                    if(cb) cb.call();
                });
            }
            else
            {
                if(cb) cb.call();
            }
        },

        removeOpenStatus: removeOpenStatus,

        resize: function()
        {
            var id, obj, height = Main.viewport.height;

            for(id in _registDic)
            {
                obj = _registDic[id];

                obj.$container.css("height", height);
            }
        }
    };

    function addOpenStatus(id)
    {
        _openedDic[id] = true;
        _openedList.push(id);

        //MainPage.setSceneScrollLock(true);
    }

    function removeAllOpenStatus()
    {
        _openedDic = {};
        _openedList = [];
    }

    function removeOpenStatus(id)
    {
        delete _openedDic[id];

        for(var i=0;i<_openedList.length;i++)
        {
            if(_openedList[i] === id)
            {
                _openedList.splice(i, 1);
                break;
            }
        }

        //if(_openedList.length === 0)
        //{
        //    MainPage.setSceneScrollLock(false);
        //}
    }

    function getTopPopupId()
    {
        if(_openedList.length === 0) return null;

        return _openedList[_openedList.length-1];
    }

}());