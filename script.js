let snowflake
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
}
setInterval(snowFall, 1)

console.log(snowflake)