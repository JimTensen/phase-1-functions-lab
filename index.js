// Code your solution in this file!
function distanceFromHqInBlocks(startBlock) {
    return Math.abs(startBlock - 42);
}

function distanceFromHqInFeet(startBlock) {
    return distanceFromHqInBlocks(startBlock) * 264
}

function distanceTravelledInFeet(streetStart, streetEnd) {
    const numBlocks = Math.abs(streetStart - streetEnd);
    return numBlocks * 264;
}

function calculatesFarePrice(streetStart, streetEnd) {
    const numBlocks = Math.abs(streetStart - streetEnd);
    const trip = numBlocks * 264;
    let fare;
    
    if (trip <= 400) {
        fare = 0;
    } else if (trip <= 2000) {
        fare = (trip-400) * 0.02;
    } else if (trip <= 2500) {
        fare = 25;
    } else if (trip > 2500) {
        fare = "cannot travel that far"
    }
    return fare;
}

