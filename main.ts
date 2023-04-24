input.onButtonPressed(Button.A, function () {
    comment.comment("Sets the fork to the \"Down\" position")
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
})
input.onButtonPressed(Button.AB, function () {
    comment.comment("Moves foward for one secon")
})
input.onButtonPressed(Button.B, function () {
    comment.comment("Sets the fork to the \"Up\" position")
})
basic.showLeds(`
    # # # . #
    . . # . #
    # # # # #
    # . # . .
    # . # # #
    `)
