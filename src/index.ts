/*!
 * Copyright (C) 2020  Zachary Kohnen (DusterTheFirst)
 */

window.addEventListener("load", () => {
    // Cool console message
    console.log(
        "%cCopyright 2020 %cZachary Kohnen %c(%cDusterTheFirst%c)",
        "color: #8080ff; font-size: 25px;",
        "color: #80f0ff; font-size: 25px;",
        "color: #808080; font-size: 25px;",
        "color: #f080f0; font-size: 25px;",
        "color: #808080; font-size: 25px;"
    );
});

async function getWeatherData() {
    return (await fetch("")).json() as 
}

/* 
https://home.openweathermap.org/api_keys
https://openweathermap.org/price
https://openweathermap.org/forecast5
https://openweathermap.org/appid
https://openweathermap.org/current
https://api.openweathermap.org/data/2.5/weather?q=Wellesley,US&APPID=5bf0570e6bc21b4bcf28d878896f8140
https://openweathermap.org/faq#error401
https://fontawesome.com/icons?d=gallery&c=weather&m=free
*/