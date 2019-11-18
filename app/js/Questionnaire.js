/**
 * Created by sav on 2019/11/2.
 */
"use strict";

(function(){

    var $doms = {},
        _isFormMode = false,
        _isLocking = false;

    var self = window.Questionnaire =
    {
        init: function()
        {
            $doms.container = $("#questionnaire");

            self.Questions.init($doms.container.find(".question-block"));
            self.Form.init($doms.container.find(".form-block"));

            $doms.container.find(".deco-2").on("click", function(event)
            {
                event.preventDefault();

                self.switchMode();

            });

            self.Questions.show(function()
            {
                //self.switchMode();
            });



            var id = "questionnaire";
            ScrollListener.addListener(id, function()
            {

                var result = ScrollListener.testDom($doms.container[0], 150, -150);

                if(result.topInside || result.bottomInside)
                {
                    gtag('config', _GA_ID_, {
                        'page_title' : "Q42019_Question"
                    });

                    ScrollListener.removeListener(id);
                }
            });
        },

        switchMode: function(isToFormMode)
        {
            if(_isLocking) return;

            if(isToFormMode === undefined) isToFormMode = !_isFormMode;
            if(_isFormMode === isToFormMode) return;

            _isFormMode = isToFormMode;

            _isLocking = true;

            if(_isFormMode)
            {
                gtag('config', _GA_ID_, {
                    'page_title' : "Q42019_data"
                });
            }

            var oldBlock = isToFormMode? self.Questions: self.Form,
                newBlock = !isToFormMode? self.Questions: self.Form;

            $doms.container.toggleClass("form-mode", _isFormMode);

            oldBlock.hide(function()
            {
                newBlock.show(function()
                {
                    _isLocking = false;
                });
            });
        },

        resize: function()
        {
            var vp = Main.viewport;

            $doms.container.css("height", vp.height);
        }
    };

}());