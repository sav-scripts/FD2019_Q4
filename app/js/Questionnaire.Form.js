/**
 * Created by sav on 2019/11/2.
 */

"use strict";

(function(){

    var $doms = {},
        _funcDic = {},
        _isHiding = true,
        _isFemale = false,
        _ruleChecked = false;


    var self = window.Questionnaire.Form =
    {
        init: function($container)
        {
            $doms.container = $container;

            $("#twzipcode").twzipcode();

            // checkbox
            (function(){

                $doms.ruleCheck = $doms.container.find(".check-rule").on("click", function(event)
                {
                    event.preventDefault();

                    _ruleChecked = !_ruleChecked;
                    _funcDic.updateRuleCheck();
                });

                $doms.checkMale = $doms.container.find(".check-male").on("click", function(event)
                {
                    event.preventDefault();

                    _isFemale = false;
                    _funcDic.updateGenderCheck();
                });

                $doms.checkFemale = $doms.container.find(".check-female").on("click", function(event)
                {
                    event.preventDefault();

                    _isFemale = true;
                    _funcDic.updateGenderCheck();
                });

                _funcDic.updateRuleCheck = function()
                {
                    $doms.ruleCheck.toggleClass("checked-mode", _ruleChecked);
                };

                _funcDic.updateGenderCheck = function()
                {
                    $doms.checkMale.toggleClass("checked-mode", !_isFemale);
                    $doms.checkFemale.toggleClass("checked-mode", _isFemale);
                };

            }());


            // 手機驗證
            (function(){

                $doms.container.find(".btn-send-verify").on("click", function(event)
                {
                    event.preventDefault();

                    Loading.progress(Main.settings.defaultPendingText);

                    var params = {},
                        dom,
                        $phone = $doms.container.find(".phone");

                    dom = $phone[0];
                    if(!PatternSamples.phone.test(dom.value))
                    {
                        alertDom(dom, '請輸入正確的手機號碼'); return;
                    }
                    params.phone = dom.value;

                    ApiProxy.callApi("phone_verify", params, null, function(result)
                    {
                        if(result.error)
                        {
                            alert(result.error);
                        }
                        else
                        {
                            alert("驗證碼簡訊已送出, 請於取得驗證碼 5 分鐘內完成填寫");
                        }

                        Loading.hide();
                    });

                });

            }());


            // 表單
            (function(){


                var $name = $doms.container.find(".user-name"),
                    $phone = $doms.container.find(".phone"),
                    $addressDetail = $doms.container.find(".address-detail"),
                    $phoneVerify = $doms.container.find(".phone-verify"),
                    $age = $doms.container.find(".age");

                _funcDic.resetForm = function()
                {
                    $("#twzipcode").twzipcode("reset");

                    $name.val('');
                    $phone.val('');
                    $addressDetail.val('');
                    $phoneVerify.val('');

                    _isFemale = false;
                    _funcDic.updateGenderCheck();

                    $age[0].selectedIndex = 0;
                };

                _funcDic.resetForm();

                $doms.container.find(".btn-send").on("click", function(event)
                {
                    event.preventDefault();


                    gtag('event', 'click', {
                        'event_category': "Q42019_data",
                        'event_label': "Q42019_submit"
                    });

                    window.dotq.push(
                    {
                        'projectId': '10000',
                        'properties': {
                            'pixelId': '10093592',
                            'qstrings': {
                                'et': 'custom',
                                'ea': 'Final10093592'
                            }
                    }});

                    var $addressCounty = $doms.container.find(".address-county"),
                        $addressDistrict = $doms.container.find(".address-district");

                    var dom,
                        params =
                        {
                            "address_county": $addressCounty.val(),
                            "address_district": $addressDistrict.val(),
                            "questionnaire_id": Questionnaire.Questions.getId()
                            //"questionnaire": Questionnaire.Questions.getResult()
                        };

                    dom = $doms.ruleCheck[0];
                    if(!_ruleChecked)
                    {
                        alert('您必須同意我們的活動辦法和隱私政策相關規定'); dom.focus(); return;
                    }

                    dom = $name[0];
                    if(PatternSamples.onlySpace.test(dom.value))
                    {
                        alertDom(dom, '請輸入您的姓名'); return;
                    }
                    //else if(!(/^[\u4e00-\u9fa5]{2,8}$/).test(dom.value))
                    //{
                    //    alert('請輸入 2 ~ 8 字的中文名字'); dom.focus(); return;
                    //}
                    params.name = dom.value;

                    params.gender = _isFemale? "女": "男";

                    dom = $phone[0];
                    if(!PatternSamples.phone.test(dom.value))
                    {
                        alertDom(dom, '請輸入正確的手機號碼'); return;
                    }
                    params.phone = dom.value;

                    dom = $phoneVerify[0];
                    if(/^[0-9]{5}$/.test(dom.value) == false)
                    {
                        alertDom(dom, '請輸入 5 碼數字的手機驗證碼'); return;
                    }
                    params.phone_verify = dom.value;


                    dom = $addressCounty[0];
                    if(!params.address_county)
                    {
                        alertDom(dom, '請選擇縣市'); return;
                    }

                    dom = $addressDistrict[0];
                    if(!params.address_district)
                    {
                        alertDom(dom, '請選擇區域'); return;
                    }

                    dom = $addressDetail[0];
                    if(PatternSamples.onlySpace.test(dom.value))
                    {
                        alertDom(dom, '請輸入詳細地址'); return;
                    }
                    params.address = dom.value;

                    dom = $age[0];
                    if(dom.selectedIndex === 0)
                    {
                        alertDom(dom, '請選擇您的年齡'); return;
                    }
                    params.age = dom.value;

                    //console.log(params);

                    Loading.progress(Main.settings.defaultPendingText).show();

                    ApiProxy.callApi("form", params, null, function(response)
                    {
                        Loading.hide();

                        if(response.error)
                        {
                            alert(response.error);
                        }
                        else
                        {
                            alert("資料成功送出");
                            _funcDic.resetForm();
                            Questionnaire.Questions.setId(null);
                            Questionnaire.switchMode(false);

                            PopupMangaer.open("#popup-questionnaire-step3");
                        }
                    });
                });

            }());

            $doms.container.css("display", "none");
        },

        show: function (cb)
        {
            if (!_isHiding) return;
            _isHiding = false;

            $doms.container.css("display", "block");

            var tl = new TimelineMax;
            tl.set($doms.container, {autoAlpha: 0});
            tl.to($doms.container, .3, {autoAlpha: 1});
            tl.add(function ()
            {
                if (cb) cb.apply();
            });
        }
        ,

        hide: function (cb)
        {
            if (_isHiding) return;
            _isHiding = true;

            var tl = new TimelineMax;
            tl.to($doms.container, .3, {autoAlpha: 0});
            tl.add(function ()
            {
                $doms.container.css("display", "none");
                if (cb) cb.apply();
            });
        }



    };


    function alertDom(dom, message)
    {
        alert(message);

        dom.focus();

        var $dom = $(dom);

        $dom.toggleClass("alert-mode", true);

        TweenMax.killTweensOf(dom);

        var dtime = .1,
            twinlkeTime = .1,
            time = 0,
            twinlkes = 4,
            final = 1;

        var tl = new TimelineMax;


        for(var i=1;i<twinlkes;i++)
        {
            tl.to(dom, 0, {onComplete: function()
            {
                $dom.toggleClass("alert-mode", true);
            }}, time);

            time += dtime;

            tl.to(dom, 0, {onComplete: function()
            {
                $dom.toggleClass("alert-mode", false);
            }}, time);

            time += twinlkeTime;
        }

        tl.to(dom, 0, {onComplete: function()
        {
            $dom.toggleClass("alert-mode", true);
        }}, time);

        time += final;

        tl.to(dom, 0, {onComplete: function()
        {
            $dom.toggleClass("alert-mode", false);
        }}, time);

        //TweenMax.delayedCall(2, function()
        //{
        //    $dom.toggleClass("alert-mode", false);
        //});
    }

}());