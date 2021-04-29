function Delete_Area () {
    Loop_number = 24
    for (let index = 0; index < 25; index++) {
        for (let index = 0; index <= Loop_number; index++) {
            led.unplot(index % 5, index / 5)
            basic.pause(100)
            led.plot(index % 5, index / 5)
        }
        led.unplot(Loop_number % 5, Loop_number / 5)
        Loop_number = Loop_number - 1
    }
}
function Fill_Area () {
    Loop_number = 24
    for (let index = 0; index < 25; index++) {
        for (let index = 0; index <= Loop_number; index++) {
            led.plot(index % 5, index / 5)
            basic.pause(100)
            led.unplot(index % 5, index / 5)
        }
        led.plot(Loop_number % 5, Loop_number / 5)
        Loop_number = Loop_number - 1
    }
}
let Loop_number = 0
Fill_Area()
basic.pause(100)
Delete_Area()
