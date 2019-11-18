(function(){

    "use strict";
    var self = window.Main =
    {
        localSettings:
        {
            isLocal: true,
            apiPath: "./test_api/",
            apiExtension: ".php"
        },

        settings:
        {
            isLocal: false,
            apiPath: "./api/",
            apiExtension: ".php",
            platform: "",
            defaultPendingText: "資料處理中"
        },


        viewport:
        {
            width: 0,
            height: 0,
            ranges: [750],
            index: -1,
            changed: false
        },

        init: function()
        {
            if(Utility.urlParams.logger==1)
            {
                Logger.init(true).show().open();
            }

            if(window.location.host == "local.savorks.com" || window.location.host == "aws-linux.savorks.com")
            {
                $.extend(self.settings, self.localSettings);
            }

            if(window._API_DATA_)
            {
                ApiProxy.applyTestData(_API_DATA_);
            }

            ApiProxy.setApiPath(self.settings.apiPath);
            ApiProxy.setExtension(self.settings.apiExtension);

            if(Utility.urlParams.layout == "1")
            {
                $("#main-page").css("opacity",.7);

                $("#layout").css("display", "block");
                $("#popup-layout").css("display", "block");
            }

            Loading.init();
            Loading.progress('LOADING').hide();

            MainPage.init();
            Nav.init();
            PopupMangaer.init();

            $(window).on("resize", onResize);
            onResize();

            if(Utility.urlParams.coupon == "1")
            {
                PopupMangaer.open("#coupon");
            }
        },

        addSvgBorder: function($container, setting)
        {
            //var dPc = getD(setting["pc"]),
            //    dMobile = getD(setting["mobile"]);
            //
            //var $pathPc = $(document.createElementNS('http://www.w3.org/2000/svg', 'path'))
            //    .addClass("border-pc")
            //    .attr({d: dPc});
            //
            //var $pathMobile = $(document.createElementNS('http://www.w3.org/2000/svg', 'path'))
            //    .addClass("border-mobile")
            //    .attr({d: dMobile});
            //
            //$svg.append($pathPc);
            //$svg.append($pathMobile);


            var $svgPc = getSvg(setting.pc.w, setting.pc.h, setting.pc.r, "pc-only"),
                $svgMobile = getSvg(setting.mobile.w, setting.mobile.h, setting.mobile.r, "mobile-only");

            $container.prepend($svgPc);
            $container.prepend($svgMobile);
        }
    };

    function getSvg(width, height, radius, extraClass)
    {
        var d = getD(width, height, radius);

        var $svg =  $(document.createElementNS('http://www.w3.org/2000/svg', 'svg'))
            .addClass("content-border")
            .addClass(extraClass)
            .attr({width: width, height: height});


        var $path = $(document.createElementNS('http://www.w3.org/2000/svg', 'path'))
            .addClass("border")
            .attr({d: d});

        $svg.append($path);

        return $svg;
    }

    function getD(width, height, r)
    {
        var sx = 2,
            sy = 2,
            h = width - (r + sx) * 2,
            v = height - (r + sy) * 2;

        return "M"+(r+sx)+","+sy+" h"+h+" a"+r+","+r+" 0 0 1 "+r+","+r+" v"+v+" a"+r+","+r+" 0 0 1 -"+r+","+r+" h-"+h+" a"+r+","+r+" 0 0 1 -"+r+",-"+r+" v-"+v+" a"+r+","+r+" 0 0 1 "+r+",-"+r+" z";
    }

    function onResize()
    {
        var oldIndex = self.viewport.index;

        self.viewport.width = window.innerWidth;
        self.viewport.height = window.innerHeight;

        self.viewport.index = self.viewport.width <= self.viewport.ranges[0]? 0: 1;

        if(oldIndex !== self.viewport.index) self.viewport.changed = true;

        //console.log(self.viewport.width);

        MainPage.resize();
        PopupMangaer.resize();
    }

}());
