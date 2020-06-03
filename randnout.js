
function random(low, high)
{

    //let res = (high - low) + low

    //console.log("(high - low) + low: " + res)
    
    return Math.floor(Math.random() * (high - low) + low)

}

console.log(random(0, 1000))