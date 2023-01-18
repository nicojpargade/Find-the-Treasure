const WIDTH = 400;
const HEIGHT = 400;

let target = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGHT),
};

let $map = document.getElementById("map");
let $distance = document.getElementById("distance");
let clicks = 0;

$map.addEventListener("click", function (e) {
    clicks++;
    let distance = getDistance(e, target);
    console.log(distance);
    let distanceHint = getDistanceHint(distance);
    $distance.innerHTML = "...";
    setTimeout(function () {
        $distance.innerHTML = distanceHint;
    }, 800);

    if (distance < 20) {
        alert(
            `Found the Treasure in ${clicks} ${
                clicks === 1 ? "click" : `clicks`
            }`
        );
        location.reload();
    }
});
