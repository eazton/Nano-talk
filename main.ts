input.onPinPressed(TouchPin.P0, function () {
    radio.sendString("GOOD THX")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("how are you")
})
input.onPinPressed(TouchPin.P2, function () {
    radio.sendString(" MrBeast6000, oh MrBeast6000, oh   MrBeast6000, yeah, you know his name He changed it once or twice, but I think it's here to stay His thumbnails were made in Paint But if you ask me, I think they're kind of quaint   MrBeast6000, oh MrBeast6000, oh   His random videos are the name of the game Some might say they're his ticket to fame The occasional intro may not make sense But we all get a laugh at their expense   MrBeast6000, oh MrBeast6000, oh   MrBeast, oh MrBeast, oh MrBeast, oh MrBeast, oh, 6000 MrBeast 6000")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("NDl")
})
radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("hello")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("GOOD YOU")
})
basic.showString("NANOTALK")
basic.clearScreen()
