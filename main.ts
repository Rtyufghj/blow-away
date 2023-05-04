let B = 0
let A = 0
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        if (input.soundLevel() > 128) {
            A = randint(0, 4)
            B = randint(0, 4)
        }
        if (led.point(A, B)) {
            led.plot(A, B)
            led.unplot(A + 1, B)
        }
    }
})
