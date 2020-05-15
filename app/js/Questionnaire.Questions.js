/**
 * Created by sav on 2019/11/2.
 */

"use strict";

(function(){

    var $doms = {},
        _funcDic = {},
        _isHiding = true,
        _questionnaireId = null,
        _questionnaireResult = [];

    var self = window.Questionnaire.Questions =
    {
        getId: function(){ return _questionnaireId; },
        setId: function(id){ _questionnaireId = id; },

        init: function($container)
        {
            $doms.container = $container;

            // 問券設定
            (function(){

                var numQuestions = 5,
                    settings =
                    {
                        isMulti: [1,1,0,0,0]
                    },
                    $questionDic = {};

                for(var i=1;i<=numQuestions;i++){ setupQuestion(i);}

                _funcDic.resetQuestions = function()
                {
                    for(var i=1;i<=numQuestions;i++)
                    {
                        var $question = $questionDic[i];

                        $question._reset();
                    }
                };

                _funcDic.getQuestionResults = function()
                {
                    //var result = {};
                    var result = [];

                    for(var i=1;i<=numQuestions;i++)
                    {
                        var $question = $questionDic[i];

                        var obj = $question._getResult();

                        if(obj.notAnswered)
                        {
                            alert("請完成第 "+i+" 題的作答");
                            return null;
                        }
                        else
                        {
                            delete  obj.notAnswered;

                            result.push(obj);

                            /*
                            result["q_"+i+"_question"] = obj.question;

                            //result["q_"+i+"_answer"] = obj.answer.join(",");
                            result["q_"+i+"_answer"] = obj.answer;

                            //result["q_"+i+"_answer_index"] = obj.answerIndex.join(",");
                            result["q_"+i+"_answer_index"] = obj.answerIndex;
                            */
                        }
                    }

                    return result;
                };

                function setupQuestion(index)
                {
                    var $question = $questionDic[i] = $doms.container.find(".q-" + index),
                        isMulti = settings.isMulti[index-1],
                        resultArray = [];

                    var questionText = $question.find(".title").find(".text").html(),
                        optionTextArray = [];



                    var $options = $question.find(".option");

                    $.each($options, function(i, dom)
                    {
                        var $option = $(dom);

                        resultArray[i] = 0;

                        optionTextArray[i] = $option.find(".text").text();

                        $option.on("click", function(event)
                        {
                            event.preventDefault();

                            //console.log("q: " + index + ", option: " + optionIndex);

                            if(!isMulti)
                            {
                                $question._reset();
                            }

                            resultArray[i] = resultArray[i] === 0? 1: 0;
                            $option.toggleClass("checked-mode", resultArray[i] === 1);

                            //alert($option._text);
                        });


                        //console.log($option._text);
                    });

                    $question._reset = function()
                    {

                        $.each($options, function(i, dom)
                        {
                            var $option = $(dom);

                            resultArray[i] = 0;
                            $option.toggleClass("checked-mode", resultArray[i] === 1);
                        });

                    };

                    $question._getResult = function()
                    {
                        var obj =
                        {
                            notAnswered: true,
                            question: questionText,
                            is_multi: isMulti? 1: 0,
                            answer: [],
                            answerIndex: []
                        };

                        $.each($options, function(i)
                        {
                            var b = resultArray[i];
                            if(b)
                            {
                                obj.notAnswered = false;
                                obj.answer.push(optionTextArray[i]);
                                obj.answerIndex.push(i+1);
                            }

                        });


                        return obj;
                    };
                }

            }());


            $doms.container.find(".btn-next").on("click", function(event)
            {
                event.preventDefault();

                gtag('event', 'click', {
                    'event_category': "Q42019_Question",
                    'event_label': "Q42019_Question"
                });

                console.log(Main.settings.isEnd);

                if(Main.settings.isEnd)
                {
                    alert(Main.settings.endMessage);
                    return;
                }

                var result = _funcDic.getQuestionResults();

                if(result === null) return;




                var sendData = {questionnaire: result};

                //console.log(result);
                //_funcDic.resetQuestions();

                ApiProxy.callApi("questionnaire", sendData, null, function(r)
                {
                    //console.log(r);

                    if(r.error)
                    {
                        alert(r.error);
                    }
                    else
                    {
                        _questionnaireResult = result;
                        _questionnaireId = r.questionnaire_id;

                        _funcDic.resetQuestions();
                        Questionnaire.switchMode(true);
                    }

                });

            });


            $doms.container.css("display", "none");
        },

        getResult: function()
        {
            return _questionnaireResult;
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

}());