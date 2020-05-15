<?php

$site_url = 'https://www.healthtime.com.tw/MetaminQ4/';
$share_image_url = 'https://www.healthtime.com.tw/MetaminQ4/share.png';



$test_hosts = array("local.savorks.com");
if(in_array($_SERVER['HTTP_HOST'], $test_hosts))
{
    $site_url = 'http://local.savorks.com/projects/insight/FD2019_Q4/app/';
    $share_image_url = 'http://local.savorks.com/projects/insight/FD2019_Q4/app/share.png';
}

date_default_timezone_set("Asia/Taipei");
$now = (new DateTime())->getTimestamp();
$endDate = (new DateTime('2019-12-21 00:00:01'))->getTimestamp();

$isEnd = $now > $endDate;

?>


<!DOCTYPE html>
<html>
<head lang="zh-Hant-TW">
    <title>2週有感 6週有效 |統一健康3D</title>
    <meta name="description" content="統一健康3D 紅麴❌苦瓜專利複方幫助您促進新陳代謝，有效調節低血脂血糖" />
    <meta charset="UTF-8">

    <script>
        var clientWidth = screen.width,
            mobileWidth = 750,
            pcMinWidth = 1366;

        var metaTag=document.createElement('meta');
        metaTag.name = "viewport";

        if(clientWidth > mobileWidth)
        {
            metaTag.content = "width=" + pcMinWidth;
        }
        else
        {
            metaTag.content = "width=device-width";
        }

        document.getElementsByTagName('head')[0].appendChild(metaTag);



    </script>

    <meta property="fb:app_id" content="441266939867693"/>
    <meta property="og:title" content="2週有感 6週有效 |統一健康3D" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content="60天有感體驗大募集" />
    <meta property="og:url" content="<?=$site_url?>" />
    <meta property="og:image" content="<?=$share_image_url?>" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="627" />

    <link rel="stylesheet" href="styles/main.css">

    <!-- media start -->

    <!-- Global Site Tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-46997532-1"></script>

    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        window._GA_ID_ = 'UA-46997532-1';
        gtag('config', _GA_ID_);
    </script>

    <!-- adbert -->
    <script>
        (function(w, d, s, r, c, a, m){
            w[c] = w[c] || function() {
                (w[c].q = w[c].q || []).push(arguments)
            }
            a=d.createElement(s);
            a.async=1;
            a.src=r+'&'+Math.random();
            m=d.getElementsByTagName(s)[0];
            m.parentNode.insertBefore(a,m);
        })(window, document, 'script', '//www.techsolutions.com.tw/analytics.js?id=adb5dd21f65554e8&d=http://adbert.techsolutions.com.tw', 'atm');

        atm('send', 'pageview');
    </script>

    <!-- Multiforce -->
    <script src="//cdn.doublemax.net/js/rtid.js"></script>
    <script src="//dmp.eland-tech.com/dmpreceiver/eland_tracker.js"></script>
    <script async src="https://cdn.doublemax.net/dmp/cft/tracker.js"></script>
    <script>
        clickforce_rtid("9113001");
        ElandTracker.Track({'source':'CAP9113',
            'trackType':'view',
            'trackSubfolderDepth':3,
            'targetType':'usual'
        });
        clickforce_rtid("9113002");
        ElandTracker.Track({'source':'CAP9113',
            'trackType':'view',
            'trackSubfolderDepth':3,
            'targetType':'pageview'
        });
        window.cft=window.cft||function(){(cft.q=cft.q||[]).push([].slice.call(arguments))};
        cft('setSiteId', 'CF-191100051663');
        cft('setEnableCookie');
        cft('setViewPercentage');
        cft('setTPCookie');
    </script>

    <!-- yahoo -->
    <script type="application/javascript">(function(w,d,t,r,u){w[u]=w[u]||[];w[u].push({'projectId':'10000','properties':{'pixelId':'10093592'}});var s=d.createElement(t);s.src=r;s.async=true;s.onload=s.onreadystatechange=function(){var y,rs=this.readyState,c=w[u];if(rs&&rs!="complete"&&rs!="loaded"){return}try{y=YAHOO.ywa.I13N.fireBeacon;w[u]=[];w[u].push=function(p){y([p])};y(c)}catch(e){}};var scr=d.getElementsByTagName(t)[0],par=scr.parentNode;par.insertBefore(s,scr)})(window,document,"script","https://s.yimg.com/wi/ytc.js","dotq");</script>

    <!-- Global site tag (gtag.js) - Google Ads: 820270677 -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-820270677"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'AW-820270677');
    </script>

    <!-- media end -->

</head>
<body onload="Main.init();">

    <!-- Facebook Pixel Code -->
    <script>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1275949049238571');
        fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
                   src="https://www.facebook.com/tr?id=1275949049238571&ev=PageView&noscript=1"
            /></noscript>
    <!-- End Facebook Pixel Code -->



    <div id="main-loading">

        <div class="content">

            <div id="main-loading-text"></div>

        </div>

    </div>

    <div id="loading">

        <div id="loading-icon"></div>
        <div id="loading-text">99</div>

    </div>


    <div id="invisible-container">

        <svg height="0" width="0" xmlns="http://www.w3.org/2000/svg" style="visibility: hidden;">
            <defs>
                <linearGradient id="cupon-border-color" x1="0%" y1="0%" x2="10%" y2="100%" >

                    <!--<stop offset="0%" stop-color="#F79533">-->
                    <!--<animate attributeName="stop-color" values="#F79533; #F37055; #EF4E7B; #A166AB; #5073B8; #1098AD; #07B39B; #6DBA82; #F79533" dur="4s" repeatCount="indefinite"></animate>-->
                    <!--</stop>-->

                    <!--<stop offset="100%" stop-color="#F79533">-->
                    <!--<animate attributeName="stop-color" values="#F37055; #EF4E7B; #A166AB; #5073B8; #1098AD; #07B39B; #6DBA82; #F79533; #F37055" dur="4s" repeatCount="indefinite"></animate>-->
                    <!--</stop>-->

                    <stop offset="0%" stop-color="#f5da67">
                        <animate attributeName="stop-color" values="#f5da67; #c28e39; #f5da67; #c28e39; #f5da67; #c28e39; #f5da67" dur="5s" repeatCount="indefinite"></animate>
                    </stop>

                    <!--<stop offset="100%" stop-color="#f5da67">-->
                    <!--<animate attributeName="stop-color" values="#c28e39; #f5da67; #c28e39; #f5da67; #c28e39; #f5da67; #c28e39" dur="5s" repeatCount="indefinite"></animate>-->
                    <!--</stop>-->

                </linearGradient>


                <defs>

                    <radialGradient id="index-border-color" cx=".1" cy=".1" r=".7" fx=".5" fy=".5">

                        <stop offset="50%" stop-color="#fff1c1" stop-opacity="1"></stop>
                        <stop offset="100%" stop-color="#fff1c1" stop-opacity="0.2"></stop>

                        <animate attributeName="cx" values=".1; .9; .9; .9; .1; .1; .1" dur="5s" repeatCount="indefinite"></animate>
                        <animate attributeName="cy" values=".1; .1; .5; .9; .9; .5; .1" dur="5s" repeatCount="indefinite"></animate>

                    </radialGradient>

                </defs>
            </defs>
        </svg>

    </div>



    <!--<div id="layout">-->

        <!--<div class="all"></div>-->
        <!--&lt;!&ndash;<div class="questionnaire-step-2"></div>&ndash;&gt;-->

    <!--</div>-->

    <div id="main-page">


        <div class="scroll-lock-wrapper">



            <div id="index">


                <div class="background"></div>

                <div class="right-content">

                    <div class="btn-coupon-1"></div>
<!--                    <div class="btn-coupon-2"></div>-->
                    <a class="btn-coupon-2" href="https://bit.ly/2D0yFYE"></a>

                </div>
                <div class="light-1"></div>

                <div class="contents">

                    <!--<div class="guide"></div>-->

                    <div class="deco-3"></div>
                    <div class="deco-1 index-title">

                        <row><div></div><div></div><div></div><div></div></row>
                        <row><div></div><div></div><div></div><div></div></row>

                    </div>
                    <div class="deco-2"></div>
                    <div class="deco-4"></div>
                    <div class="deco-5"></div>
                    <div class="deco-6">
                        <div class="deco-6-2"></div>
                        <div class="deco-6-3"></div>
                    </div>

                    <div class="light-2"></div>

                    <div class="deco-7"></div>



                    <div class="users">


                        <svg class="border-svg pc-only" width="557" height="139" xmlns="http://www.w3.org/2000/svg">
                            <!--<rect width="555" height="137" x="0" y="0" fill="url(#index-border-color)"></rect>-->
                        </svg>

                        <svg class="border-svg mobile-only" width="344" height="344" xmlns="http://www.w3.org/2000/svg">

                        </svg>


                        <div class="arrow-down-container">
                            <div class="arrow-down"></div>
                        </div>


                        <!--a 75,75 0 1,0 -150,0-->

                        <svg class="user-photo pc-only" width="430" height="230" xmlns="http://www.w3.org/2000/svg">



                            <clipPath id="user-photo-clip">
                                <polygon points="0,0 430,0 430,200 0,200"></polygon>
                            </clipPath>

                            <image class="user-photo-image p-1" xlink:href="./images/index-user-photo-1.png" x="100" y="0" height="230" width="230"></image>
                            <!-- image sprite example
                                <svg class="user-photo-image p-1" x="100" y="0" height="90" width="90" preserveAspectRatio="xMinYMin slice" viewBox="50 50 90 90">
                                    <image xlink:href="./images/index-user-photo-1.png" x="0" y="0" height="230" width="230" preserveAspectRatio="xMinYMin slice"></image>
                                </svg>
                            -->

                            <image class="user-photo-image p-2" xlink:href="./images/index-user-photo-2.png" x="100" y="0" height="230" width="230"></image>
                            <image class="user-photo-image p-3" xlink:href="./images/index-user-photo-3.png" x="100" y="0" height="230" width="230"></image>
                            <image class="user-photo-image p-4" xlink:href="./images/index-user-photo-4.png" x="100" y="0" height="230" width="230"></image>
                            <image class="user-photo-image p-5" xlink:href="./images/index-user-photo-5.png" x="100" y="0" height="230" width="230"></image>
                        </svg>

                        <svg class="user-photo mobile-only" width="500" height="500" xmlns="http://www.w3.org/2000/svg">



                            <clipPath id="user-photo-clip-2">
                                <path class="border" d="M-9.641706760429855,175.5 a169,169 0 1 1 35.727187202545,42.961510887107295 l -60.36889396297485,5.738489112892751 l 24.641706760429855,-48.700000000000045 "></path>


                                <!--<path class="border" d="-->
                                <!--M 19, 125-->
                                <!--a 75,75 0 1 1 56,25-->
                                <!--"></path>-->

                            </clipPath>

                            <image class="user-photo-image p-1" xlink:href="./images/index-user-photo-1.m.png" x="0" y="0" height="300" width="300"></image>
                            <image class="user-photo-image p-2" xlink:href="./images/index-user-photo-2.m.png" x="0" y="0" height="300" width="300"></image>
                            <image class="user-photo-image p-3" xlink:href="./images/index-user-photo-3.m.png" x="0" y="0" height="300" width="300"></image>
                            <image class="user-photo-image p-4" xlink:href="./images/index-user-photo-4.m.png" x="0" y="0" height="300" width="300"></image>
                            <image class="user-photo-image p-5" xlink:href="./images/index-user-photo-5.m.png" x="0" y="0" height="300" width="300"></image>
                        </svg>

                        <div class="user-texts">

                            <div class="user-text text-1"></div>
                            <div class="user-text text-2"></div>
                            <div class="user-text text-3"></div>
                            <div class="user-text text-4"></div>
                            <div class="user-text text-5"></div>

                        </div>


                        <div class="user-1"></div>

                    </div>

                </div>

            </div>

            <div id="detail">
                <div class="background">

                    <div class="deco-left">
                        <div class="deco-1"></div>
                        <div class="deco-2"></div>
                    </div>

                    <div class="deco-right">
                        <div class="deco-1"></div>
                        <div class="deco-2"></div>
                    </div>

                </div>

                <div class="content">

                    <div class="bg-light"></div>

                    <div class="deco-5"></div>
                    <div class="deco-1"></div>

                    <div class="deco-2 detail-title">
                        <row><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></row>
                    </div>

                    <div class="deco-3"></div>
                    <div class="deco-4"></div>
                    <div class="deco-6"></div>
                    <div class="deco-7">
                        <div class="deco-7-3"></div>
                        <div class="deco-7-2"></div>
                    </div>

                </div>

            </div>

            <div id="questionnaire">

                <div class="background"></div>

                <div class="content">



                    <div class="bg-light"></div>

                    <div class="deco-1">
                        <div class="btn-rule"></div>
                    </div>
                    <div class="deco-2"></div>

                    <div class="copyright">Copyright© Uni-President Enterprises Corp., All rights reserved.</div>


                    <div class="question-block">

                        <div class="questions">

                            <div class="question q-1">

                                <div class="title two-line-mode">
                                    <div class="number">Q<span class="num">1</span></div>
                                    <div class="text">請問以下那些是您平日的飲食習慣？ (可複選)</div>
                                </div>

                                <div class="options">

                                    <div class="option">
                                        <div class="checkbox"></div>
                                        <div class="icon"></div>
                                        <div class="text">三餐<br class="mobile-only"/>總是在外</div>
                                    </div>

                                    <div class="option">
                                        <div class="checkbox"></div>
                                        <div class="icon"></div>
                                        <div class="text">較常<br class="mobile-only"/>在家用餐</div>
                                    </div>

                                    <div class="option">
                                        <div class="checkbox"></div>
                                        <div class="icon"></div>
                                        <div class="text">大魚大肉<br class="mobile-only"/>少蔬果</div>
                                    </div>

                                    <div class="option">
                                        <div class="checkbox"></div>
                                        <div class="icon"></div>
                                        <div class="text">常吃蔬果</div>
                                    </div>

                                    <div class="option">
                                        <div class="checkbox"></div>
                                        <div class="icon"></div>
                                        <div class="text">喜歡<br class="mobile-only"/>大吃大喝</div>
                                    </div>

                                    <div class="option">
                                        <div class="checkbox"></div>
                                        <div class="icon"></div>
                                        <div class="text">三餐<br class="mobile-only"/>定時定量</div>
                                    </div>

                                    <div class="clear"></div>

                                </div>

                            </div>


                            <div class="question q-2">

                                <div class="title">
                                    <div class="number">Q<span class="num">2</span></div>
                                    <div class="text">請問您從事的工作型態? (可複選)</div>
                                </div>



                                <div class="options">

                                    <div class="option">
                                        <div class="checkbox"></div>
                                        <div class="icon"></div>
                                        <div class="text">每天工作<br/>超過10小時</div>
                                    </div>

                                    <div class="option">
                                        <div class="checkbox"></div>
                                        <div class="icon"></div>
                                        <div class="text">每天<br/>正常上下班</div>
                                    </div>

                                    <div class="option">
                                        <div class="checkbox"></div>
                                        <div class="icon"></div>
                                        <div class="text">每星期工作<br/>五天以上</div>
                                    </div>

                                    <div class="option">
                                        <div class="checkbox"></div>
                                        <div class="icon"></div>
                                        <div class="text">時常加班</div>
                                    </div>

                                    <div class="option">
                                        <div class="checkbox"></div>
                                        <div class="icon"></div>
                                        <div class="text">需要交際應酬</div>
                                    </div>

                                    <div class="option">
                                        <div class="checkbox"></div>
                                        <div class="icon"></div>
                                        <div class="text">工作壓力大</div>
                                    </div>

                                </div>

                            </div>


                            <div class="question q-3">

                                <div class="title">
                                    <div class="number">Q<span class="num">3</span></div>
                                    <div class="text">請問您有做健康檢查的習慣嗎？</div>
                                </div>

                                <div class="options">

                                    <div class="option">
                                        <div class="checkbox"></div>
                                        <div class="text">每半年一次</div>
                                    </div>

                                    <div class="option">
                                        <div class="checkbox"></div>
                                        <div class="text">每年一次</div>
                                    </div>

                                    <div class="option">
                                        <div class="checkbox"></div>
                                        <div class="text">每2至5年一次</div>
                                    </div>

                                    <div class="option">
                                        <div class="checkbox"></div>
                                        <div class="text">沒有</div>
                                    </div>

                                </div>

                            </div>


                            <div class="question q-4">

                                <div class="title two-line-mode">
                                    <div class="number">Q<span class="num">4</span></div>
                                    <div class="text">請問近期您的禁食血糖平均值為多少?</div>
                                </div>



                                <div class="options">

                                    <div class="option">
                                        <div class="checkbox"></div>
                                        <div class="text">100 mg/dl以下</div>
                                    </div>

                                    <div class="option">
                                        <div class="checkbox"></div>
                                        <div class="text">100-125mg/dl</div>
                                    </div>

                                    <div class="option">
                                        <div class="checkbox"></div>
                                        <div class="text">126-140mg/dl</div>
                                    </div>

                                    <div class="option">
                                        <div class="checkbox"></div>
                                        <div class="text">140mg/dl以上</div>
                                    </div>

                                </div>

                            </div>


                            <div class="question q-5">

                                <div class="title two-line-mode">
                                    <div class="number">Q<span class="num">5</span></div>
                                    <div class="text">請問近期您的總膽固醇平均值為多少?</div>
                                </div>



                                <div class="options">

                                    <div class="option">
                                        <div class="checkbox"></div>
                                        <div class="text">130mg/dl以下</div>
                                    </div>

                                    <div class="option">
                                        <div class="checkbox"></div>
                                        <div class="text">130-200mg/dl</div>
                                    </div>

                                    <div class="option">
                                        <div class="checkbox"></div>
                                        <div class="text">201-300mg/dl</div>
                                    </div>

                                    <div class="option">
                                        <div class="checkbox"></div>
                                        <div class="text">300mg/dl以上</div>
                                    </div>

                                </div>

                            </div>

                        </div>



                        <div class="deco-3"></div>
                        <div class="deco-4"></div>

                        <div class="btn-next"></div>


                    </div>

                    <div class="form-block">

                        <div class="deco-1"></div>

                        <div class="fields">

                            <input class="user-name" type="text" maxlength="20" placeholder="請輸入姓名" title=""><br/>
                            <input class="phone" type="text" maxlength="10" placeholder="例：0912345678" title=""><br/>
                            <input class="phone-verify" type="text" maxlength="5" placeholder="" title=""><br/>

                            <!--                    <select class="address-county" name="county" title="county"></select>-->
                            <!--                    <select class="address-district" name="destrict" title="destrict"></select>-->

                            <div id="twzipcode">
                                <div data-role="county"
                                     data-name="表單名稱"
                                     data-value="預設值"
                                     data-style="address-county">
                                </div>
                                <div data-role="district"
                                     data-name="district[]"
                                     data-value="大安區"
                                     data-style="address-district">
                                </div>
                                <div data-role="zipcode"
                                     data-name="zipcode"
                                     data-value="160"
                                     data-style="address-zipcode">
                                </div>
                            </div>
                            <input class="address-detail" type="text" maxlength="50" title="">



                            <select class="age" name="age" title="">

                                <option selected disabled>請選擇</option>
                                <option>30歲以下</option>
                                <option>31-35歲</option>
                                <option>36-40歲</option>
                                <option>41-45歲</option>
                                <option>46-50歲</option>
                                <option>51-55歲</option>
                                <option>56-60歲</option>
                                <option>61-65歲</option>
                                <option>66-70歲</option>
                                <option>70歲以上</option>

                            </select>

                            <div class="check-male checked-mode"></div>
                            <div class="check-female"></div>
                            <div class="check-rule"></div>

                            <div class="btn-rule"></div>

                        </div>

                        <div class="btn-send"></div>

                        <div class="btn-send-verify"></div>

                    </div>


                </div>

            </div>

        </div>

    </div>

    <div id="popup-container">

        <div class="popup-background"></div>


        <div id="popup-layout">
            <div class="wrapper">
                <!--<div class="popup-questionnaire-step3"></div>-->
                <!--<div class="coupon"></div>-->
                <!--<div class="nav"></div>-->
            </div>
        </div>


        <div id="coupon">
            <div class="content">


                <div class="light-1"></div>



                <div class="title-1"></div>
                <div class="title-2"></div>

                <div class="light-2"></div>

                <div class="content-all">

                    <!--<svg class="content-border" height="833" width="640" xmlns="http://www.w3.org/2000/svg">-->

                        <!--<path class="border-mobile" d="M22,2 h596 a20,20 0 0 1 20,20 v789 a20,20 0 0 1 -20,20 h-596 a20,20 0 0 1 -20,-20 v-789 a20,20 0 0 1 20,-20 z" ></path>-->
                        <!--<path class="border-pc" d="M22,2 h596 a20,20 0 0 1 20,20 v789 a20,20 0 0 1 -20,20 h-596 a20,20 0 0 1 -20,-20 v-789 a20,20 0 0 1 20,-20 z" ></path>-->
                    <!--</svg>-->

                    <div class="content-image"></div>
                    <div class="retailer-1 r-1"></div>
                    <div class="retailer-2 r-2"></div>
                    <div class="serial"></div>
                    <div class="deco-1"></div>

                    <div class="btn-retailer-1 r-1"></div>
                    <div class="btn-retailer-2 r-2"></div>

                </div>

                <div class="btn-download"></div>
                <a class="btn-product" href="https://bit.ly/2D0yFYE"></a>

                <div class="note"></div>

            </div>

            <div class="base"></div>
            <div class="btn-close">
                <div class="v-1"></div>
                <div class="v-2"></div>
            </div>
        </div>


        <div id="popup-questionnaire-step3">
            <div class="content">

                <div class="light-1"></div>


                <div class="deco-1"></div>
                <div class="deco-2"></div>



                <div class="content-all">

                    <div class="content-image"></div>
                    <div class="retailer-1 r-1"></div>
                    <div class="retailer-2 r-2"></div>
                    <div class="serial"></div>

                    <div class="btn-retailer-1 r-1"></div>
                    <div class="btn-retailer-2 r-2"></div>

                </div>

                <div class="btn-download"></div>
                <a class="btn-product" href="https://bit.ly/2D0yFYE"></a>

            </div>

            <div class="base"></div>
            <div class="btn-close">
                <div class="v-1"></div>
                <div class="v-2"></div>
            </div>
        </div>

        <div id="rule">

            <div class="content">
                <div class="top"></div>
                <div class="bottom"></div>

                <a class="btn-service s-1" href="mailto:service.insightdigi.com"></a>
                <a class="btn-service s-2" href="mailto:service.insightdigi.com"></a>
                <a class="btn-privacy b-1" href="http://www.uni-president.com.tw/other_service/Legal.asp" target="_blank"></a>
                <a class="btn-privacy b-2" href="http://www.uni-president.com.tw/other_service/Legal.asp" target="_blank"></a>
                <a class="btn-privacy b-3" href="http://www.uni-president.com.tw/other_service/Legal.asp" target="_blank"></a>
            </div>

            <div class="base"></div>
            <div class="btn-close">
                <div class="v-1"></div>
                <div class="v-2"></div>
            </div>


        </div>

        <div id="winners">

            <div class="content">

                <div class="title"></div>
                <div class="details"></div>

            </div>

            <div class="base"></div>
            <div class="btn-close">
                <div class="v-1"></div>
                <div class="v-2"></div>
            </div>


        </div>

        <div id="nav-container">

            <div class="nav-btn-close"></div>

            <div class="wrapper">


                <div class="btn btn-1"></div>
                <div class="line"></div>
                <div class="btn btn-2"></div>

                <div class="line"></div>
                <a class="btn btn-3" href="https://bit.ly/2D0yFYE"></a>

                <div class="line"></div>
                <div class="btn btn-4"></div>

                <div class="line"></div>
                <div class="btn btn-5"></div>


            </div>



        </div>

    </div>


    <div id="video-player">
        <div class="cover"></div>
        <div class="video-container">

            <div id="ytplayer"></div>
            <div class="btn-close"><div class="hover-state"></div></div>

        </div>
    </div>


    <div id="nav">

        <div class="base"></div>

        <div class="btn-trigger">
            <div class="v-1"></div>
            <div class="v-2"></div>
        </div>
        <div class="nav-logo">
            <div class="v-1"></div>
            <div class="v-2"></div>
        </div>

    </div>



    <script src="js/lib/jquery-3.4.1.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
    <script>window.TweenMax || document.write('<script src="js/lib/TweenMax.min.js"><\/script>')</script>


    <!-- build:js js/optimized.js -->
    <script src="js/Main.js"></script>
    <script src="js/MainPage.js"></script>
    <script src="js/Index.js"></script>
    <script src="js/Detail.js"></script>
    <script src="js/ApiProxy.js"></script>
    <script src="js/ImageTextEffect.js"></script>
    <script src="js/PopupManager.1.0.1.js"></script>
    <script src="js/Nav.js"></script>
    <script src="js/Loading.js"></script>
    <script src="js/Coupon.js"></script>
    <script src="js/Rule.js"></script>
    <script src="js/Winners.js"></script>
    <script src="js/VideoPlayer.js"></script>
    <script src="js/Questionnaire.js"></script>
    <script src="js/Questionnaire.Questions.js"></script>
    <script src="js/Questionnaire.Form.js"></script>
    <script src="js/Questionnaire.Step3.js"></script>
    <script src="js/lib/ScrollListener.1.0.2.js"></script>
    <script src="js/lib/Utility.0.0.17.js"></script>
    <script src="js/lib/Logger.js"></script>
    <script type="text/javascript" src="js/lib/jquery.twzipcode.min.js"></script>
    <script src="js/lib/jquery.waitforimages.min.js"></script>
    <!-- endbuild -->



    <script type="text/javascript">

        window._is_end_ = Boolean(<?=$isEnd?>);
        console.log(_is_end_);

        // loading
        (function(){

            var $loading = $("#main-loading"),
                    $loadingText = $loading.find("#main-loading-text"),
                    $mask = $loading.find(".icon-top-mask");

            var imageLoadingWeight = 100;

            $('body').waitForImages
            ({
                finished: function()
                {
                },
                each: function(loaded, count, success)
                {
                    // ...

//                        console.log(loaded + " / " + count);

                    var percent = (loaded+1) / count * imageLoadingWeight;


                    updateMainLoading(percent);

                },
                waitForAll: true
            });

            window.updateMainLoading = function(percent)
            {
                var string = parseInt(percent) + "%";
                $loadingText.text(string);
                $mask.css('height', percent + "%");
            };
        }());

    </script>

</body>
</html>