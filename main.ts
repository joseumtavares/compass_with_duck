input.onButtonPressed(Button.A, function () {
    basic.showString("" + input.compassHeading() + "Graus")
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    radio.sendString("DUCK")
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Duck)
})
let bearing = 0
radio.setGroup(23)
basic.forever(function () {
    bearing = input.compassHeading()
    if (bearing <= 45 || bearing >= 315) {
        basic.showString("N")
        basic.pause(1000)
    } else {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
    }
})
