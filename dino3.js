function Down(e) {
    Podium = {};
    // create a new event for keyboard
    var n = document.createEvent("KeyboardEvent");
    // define event
    Object.defineProperty(n, "keyCode", { get: function () { return this.keyCodeVal } }),
        n.initKeyboardEvent ? n.initKeyboardEvent("keydown", !0, !0, document.defaultView, e, e, "", "", !1, "") : n.initKeyEvent("keydown", !0, !0, document.defaultView, !1, !1, !1, !1, e, 0),
        n.keyCodeVal = e,
        // execute that event
        document.body.dispatchEvent(n)
}
function Up(e) {
    Podium = {};
    // create a new event for keyboard
    var n = document.createEvent("KeyboardEvent");
    // define event
    Object.defineProperty(n, "keyCode", { get: function () { return this.keyCodeVal } }),
        n.initKeyboardEvent ? n.initKeyboardEvent("keyup", !0, !0, document.defaultView, e, e, "", "", !1, "") : n.initKeyEvent("keyup", !0, !0, document.defaultView, !1, !1, !1, !1, e, 0),
        n.keyCodeVal = e,
        // execute that event
        document.body.dispatchEvent(n)
}

setInterval(function () {
    Runner.instance_.horizon.obstacles.length > 0 && // length of arrray of number of obstacles on screen
        (/*nearest obstacle*/Runner.instance_.horizon.obstacles[0].xPos < 25 * Runner.instance_.currentSpeed - Runner.instance_.horizon.obstacles[0].width / 2 &&
            /*cactus has y greater than 75*/Runner.instance_.horizon.obstacles[0].yPos > 75 &&
            (Up(40), Down(38)),// command to jump
            /*nearest obstacle*/Runner.instance_.horizon.obstacles[0].xPos < 30 * Runner.instance_.currentSpeed - Runner.instance_.horizon.obstacles[0].width / 2 &&
            /*bird has y less than cactus*/Runner.instance_.horizon.obstacles[0].yPos <= 75 &&
            Down(40))// command to duck
}, 5);