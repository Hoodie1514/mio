function llegada_de_la_iz () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . # #
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # #
        . . # # .
        . . . # #
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # .
        . # # . .
        . . # # .
        `)
}
function llegada_der () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # . . .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        . # # . .
        # # . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # . .
        . . # # .
        . # # . .
        `)
}
function recto () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . # . # .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . # . .
        . # # # .
        . # . # .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . # # # .
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
function normalidad () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        . # . # .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . # . # .
        . . . . .
        `)
}
function girar_90_iz () {
    basic.showLeds(`
        . . # # .
        . # # . .
        . . # # .
        . . . . .
        . . . . .
        `)
}
function subir () {
    basic.showLeds(`
        . . # . .
        . # # # .
        . # . # .
        . . . . .
        . . . . .
        `)
}
function avance_a_la_der () {
    basic.showLeds(`
        . . # # .
        . . . # #
        . . # # .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . # #
        . . . . #
        . . . # #
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
function avance_a_la_iz () {
    basic.showLeds(`
        . # # . .
        # # . . .
        . # # . .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        # # . . .
        # . . . .
        # # . . .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        # . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
function estatico () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . # . # .
        . . . . .
        `)
}
function giro_90_der () {
    basic.showLeds(`
        . # # . .
        . . # # .
        . # # . .
        . . . . .
        . . . . .
        `)
}
basic.showLeds(`
    . . . . .
    . . # . .
    . # # # .
    . # . # .
    . . . . .
    `)
basic.pause(200)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.pause(100)
if (false) {
    estatico()
    basic.pause(200)
    subir()
    basic.pause(200)
    girar_90_iz()
    basic.pause(200)
    avance_a_la_iz()
    basic.pause(200)
    llegada_de_la_iz()
    basic.pause(200)
    normalidad()
} else {
    estatico()
    basic.pause(200)
    subir()
    basic.pause(200)
    giro_90_der()
    basic.pause(200)
    avance_a_la_der()
    basic.pause(200)
    llegada_der()
    basic.pause(200)
    normalidad()
}
