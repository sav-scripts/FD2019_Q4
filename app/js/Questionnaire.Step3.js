/**
 * Created by sav on 2019/11/4.
 */
(function(){

    var $doms = {},
        _borderSize =
        {
            mobile: {w: 650, h: 1170, r: 50},
            pc: {w: 640, h: 737, r: 20}
        },
        _isInit = false;

    var self = window.Questionnaire.Step3 =
    {
        init: function()
        {
            if(_isInit) return;
            _isInit = true;

            var id = "#popup-questionnaire-step3";

            var $container = $(id);

            $container.find(".btn-download").on("click", function(event)
            {
                event.preventDefault();


                gtag('event', 'click', {
                    'event_category': "Q42019_thanks",
                    'event_label': "Q42019_download"
                });

                window.open(Main.settings.apiPath + "download.php", "_blank");
            });

            $container.find(".btn-product").on("click", function(event)
            {
                event.preventDefault();


                gtag('event', 'click', {
                    'event_category': "Q42019_thanks",
                    'event_label': "Q42019_product"
                });

                //window.open("https://bit.ly/2Oclysd", "_blank");
                var $dom = $(this),
                    href = $dom.attr("href"),
                    t = $dom.attr("target") || "_blank";

                if(href) window.open(href, t);
            });

            PopupMangaer.regist(id, $container,
                {
                    containerColor: "linear-gradient(0deg, rgba(76,3,97,1) 51%, rgba(129,26,162,1) 80%)",
                    toggleContainerClass: "under-nav-mode",
                    gtagPage: "Q42019_thanks"
                });

            Main.addSvgBorder($container.find(".content-all"), _borderSize);
        }
    };

}());