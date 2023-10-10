let snowflakes = []
let snowflakeEl = document.getElementsByClassName("snowflake")


function createSnow(x, y) {

    let currentSnowflake = new snow(x, y)
    snowflakes.push(currentSnowflake)

    var snowConst = $('<img></img>');
    snowConst.attr("class", "snowflake");
    snowConst.css("top", currentSnowflake.y + "px");
    snowConst.css("left", currentSnowflake.x + "px");
    snowConst.attr("src", currentSnowflake.src)
    $("#snowList").append(snowConst);

    console.log(snowflakes)

}



createSnow(Math.floor(Math.random() * window.innerWidth), 0)
createSnow(Math.floor(Math.random() * window.innerWidth), 300)
createSnow(Math.floor(Math.random() * window.innerWidth), 0)



function snowFall() {
    for(let i = 0; i < snowflakes.length; i++) {
        
        let currentSnowHeight = parseInt(snowflakeEl[i].style.top, 10)
        currentSnowHeight += 100
        console.log(currentSnowHeight)

        if (currentSnowHeight < window.innerHeight - 100) {
            snowflakeEl[i].style.top = currentSnowHeight + "px"
        } else if (currentSnowHeight >= window.innerHeight - 100) {
            snowflakes.splice(i, 1)
        }
    }
    console.log(snowflakes)
}

setInterval(snowFall, 1000 )
console.log(snowflakes)
