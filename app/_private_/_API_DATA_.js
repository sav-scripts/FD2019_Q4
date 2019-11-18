/*
 每支 API 的資料欄位,  前端送出以 (api name).send 定義, 後端回應以 (api name).response 回應

 比如說需要一支叫 login.php 的 api, 那它的前端送出資料就定義在 "login.send" 中, 後端回應就定義在 "login.response" 中

 後端回應給前端的資料請以 json 格式回應

 每支 api 的後端回應應該都有 "error" 這個欄位, 如果執行成功沒問題的話這個欄位請給空值, 如果有問題的話, 請把要直接 alert 給使用者看的資訊放在這個欄位中
 如果有需要定義特殊錯誤狀況的話, 那麼會在下面針對個別錯誤狀況給予代號和注解

 */


window._API_DATA_ =
{
    /*** 發票抽獎 ***/
    "questionnaire.send":
    {
        /*  問券結果, 陣列, 共五題

            question: 題目
            is_multi: 是否為多選題, 0: 否, 1: 是
            answer: 答案(文字), 陣列
            answer_index: 答案(索引), 陣列
         */
        "questionnaire":
        [
            {
                "question": "請問以下那些是您平日的飲食習慣？ (可複選)",
                "is_multi": 1,
                "answer": ["三餐總是在外", "較常在家用餐"],
                "answer_index": [1, 2]
            },

            {
                "question": "請問您從事的工作型態? (可複選)",
                "is_multi": 1,
                "answer": ["每天工作超過10小時", "每星期工作五天以上"],
                "answer_index": [1, 3]
            },

            {
                "question": "請問您有做健康檢查的習慣嗎？",
                "is_multi": 0,
                "answer": ["每半年一次"],
                "answer_index": [1]
            },

            {
                "question": "請問近期您的禁食血糖平均值為多少?",
                "is_multi": 0,
                "answer": ["請問近期您的禁食血糖平均值為多少?"],
                "answer_index": [1]
            },

            {
                "question": "請問近期您的總膽固醇平均值為多少?",
                "is_multi": 0,
                "answer": ["130mg/dl以下"],
                "answer_index": [1]
            }
        ]
    },

    "questionnaire.response":
    {
        "error": "",
        "questionnaire_id": "123" // 問券 id
    },

    "form.send":
    {
        "questionnaire_id": "123", // 問券 id, 由之前呼叫 questionnaire api 得到

        // 表單資料
        "name": "John", // 名稱
        "gender": "男", // 性別
        "phone": "0987666555", // 手機號碼
        "phone_verify": "12345", // 手機驗證碼

        "city": "台北市", // 住址: 縣市
        "area": "中山區", // 住址: 地區
        "address": "xx路xx號", // 住址: 細節

        "age": "31-35歲" // 年齡
    },

    "form.response":
    {
        "error": ""
    },

    // 發送手機驗證碼
    "phone_verify.send":
    {
        "phone": "0987666555" // 手機號碼
    },

    "phone_verify.response":
    {
        "error": ""
    }
};
