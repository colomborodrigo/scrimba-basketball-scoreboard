let homeScore = 0;
let guestScore = 0;
let homeScoreElement = document.getElementById('homeScore');
let guestScoreElement = document.getElementById('guestScore');

function add1PointToHome() {
    homeScore += 1;
    homeScoreElement.textContent = homeScore;
}

function add2PointsToHome() {
    homeScore += 2;
    homeScoreElement.textContent = homeScore;
}

function add3PointsToHome() {
    homeScore += 3;
    homeScoreElement.textContent = homeScore;
}

function add1PointToGuest() {
    guestScore += 1;
    guestScoreElement.textContent = guestScore;
}

function add2PointsToGuest() {
    guestScore += 2;
    guestScoreElement.textContent = guestScore;
}

function add3PointsToGuest() {
    guestScore += 3;
    guestScoreElement.textContent = guestScore;
}

function remove1PointToHome() {
    homeScore -= 1;
    if (homeScore < 0)
        homeScore = 0;
    homeScoreElement.textContent = homeScore;
}

function remove2PointsToHome() {
    homeScore -= 2;
    if (homeScore < 0)
        homeScore = 0;
    homeScoreElement.textContent = homeScore;
}

function remove3PointsToHome() {
    homeScore -= 3;
    if (homeScore < 0)
        homeScore = 0;
    homeScoreElement.textContent = homeScore;
}

function remove1PointToGuest() {
    guestScore -= 1;
    if (guestScore < 0)
        guestScore = 0;
    guestScoreElement.textContent = guestScore;
}

function remove2PointsToGuest() {
    guestScore -= 2;
    if (guestScore < 0)
        guestScore = 0;
    guestScoreElement.textContent = guestScore;
}

function remove3PointsToGuest() {
    guestScore -= 3;
    if (guestScore < 0)
        guestScore = 0;
    guestScoreElement.textContent = guestScore;
}

function resetHome() {
    homeScore = 0;
    homeScoreElement.textContent = homeScore;
}

function resetGuest() {
    guestScore = 0;
    guestScoreElement.textContent = guestScore;
}

function newGame() {
    resetHome();
    resetGuest();
}