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