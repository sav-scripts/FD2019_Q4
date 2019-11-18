/**
 * Created by sav on 2016/7/22.
 */
(function(){

    var _testData;

    var _apiExtension = ".php",
        _apiPath = "./api/",
        _method = "POST",
        _alwaysCompleteWithError = true,
        _useTestDataIfExist = true,
        _dataType = "json";

    window.ApiProxy =
    {
        callApi: function(apiName, params, options, cb)
        {
            var apiUrl = _apiPath + apiName + _apiExtension;

            if(!options) options = {};

            var testDataName = options.testDataName,
                method = options.method || _method,
                completeWithError = options.completeWithError || _alwaysCompleteWithError;

            if(testDataName === undefined)
            {
                testDataName = _useTestDataIfExist;
            }

            if(testDataName !== false)
            {
                if(!testDataName || testDataName === true) testDataName = apiName + ".response";
            }

            if(_testData && testDataName)
            {
                //if(Main.settings.useFakeData && testDataName === false) testDataName = apiName;
                //if(testDataName === true) testDataName = apiName;

                //console.log("using fake data: " + testDataName);

                var response = _testData[testDataName];

                if(!response)
                {
                    console.error("["+testDataName+"] not exist in test data");
                }
                else
                {
                    setTimeout(function()
                    {
                        complete(response);
                    }, 1000);
                }
            }
            else
            {
                if(_dataType === "jsonp") apiUrl += "?type=jsonp";

                //console.log(apiUrl);

                $.ajax
                ({
                    url: apiUrl,
                    crossDomain: true,
                    type: method,
                    data: params,
                    dataType: _dataType
                    //xhrFields: {
                    //    withCredentials: true
                    //}
                })
                .done(complete)
                .fail(function (event)
                {
                    //alert("無法取得伺服器回應");
                    console.log("API: ["+apiName+"] 無法取得伺服器回應");
                    console.log(event);

                    if(completeWithError)
                    {
                        if(cb) cb.call(null, {error:"API: ["+apiName+"] 無法取得伺服器回應"});
                    }
                });
            }

            function complete(response)
            {
                //if(!_cachedData[apiName]) _cachedData[apiName] = response;

                if(response.error)
                {
                    console.log(response.error);

                    if(completeWithError)
                    {
                        if(cb) cb.call(null, response);
                    }
                }
                else
                {
                    if(cb) cb.call(null, response);
                }
            }
        },

        applyTestData: function(testData)
        {
            _testData = testData;
        },

        getApiPath: function()
        {
            return _apiPath;
        },

        setApiPath: function(path)
        {
            _apiPath = path;
        },

        getExtension: function()
        {
            return _apiExtension;
        },

        setExtension: function(ext)
        {
            _apiExtension = ext;
        },

        setMethod: function(method)
        {
            _method = method;
        },

        getMethod: function()
        {
            return _method;
        }
    };

}());