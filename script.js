let snowflake
let intervalID
let snowflakeEl = document.getElementsByClassName("snowflake")
function createSnow() {
    snowflake = new snow(100, 0)

    var snowConst = $('<img></img>');
    snowConst.attr("class", "snowflake");
    snowConst.attr("top", snowflake.y);
    snowConst.attr("left", snowflake.x);
    snowConst.attr("src", snowflake.src)
    $("#snowList").append(snowConst);
}
createSnow()


let currentSnowHeight = snowflake.y
function snowFall() {
    snowflakeEl[0].style.top = currentSnowHeight + "px";
    currentSnowHeight += 10;
    if(currentSnowHeight > window.innerHeight - 100) {
        clearInterval(intervalID)
        console.log("STOPPPPP")
    }
}
intervalID = setInterval(snowFall, 1)

console.log(snowflake)
