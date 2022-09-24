def giro_90_der():
    basic.show_leds("""
        . # # . .
                . . # # .
                . # # . .
                . . . . .
                . . . . .
    """)
def avance_a_la_iz():
    basic.show_leds("""
        . # # . .
                # # . . .
                . # # . .
                . . . . .
                . . . . .
    """)
    basic.pause(200)
    basic.show_leds("""
        # # . . .
                # . . . .
                # # . . .
                . . . . .
                . . . . .
    """)
    basic.pause(200)
    basic.show_leds("""
        # . . . .
                . . . . .
                # . . . .
                . . . . .
                . . . . .
    """)
    basic.pause(200)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
def llegada_der():
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                # . . . .
                . . . . .
    """)
    basic.pause(200)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                # # . . .
                . . . . .
    """)
    basic.pause(200)
    basic.show_leds("""
        . . . . .
                . . . . .
                # # . . .
                . # # . .
                # # . . .
    """)
    basic.pause(200)
    basic.show_leds("""
        . . . . .
                . . . . .
                . # # . .
                . . # # .
                . # # . .
    """)
def recto():
    basic.show_leds("""
        . . . . .
                . . # . .
                . # # # .
                . # . # .
                . . . . .
    """)
    basic.pause(200)
    basic.show_leds("""
        . . # . .
                . # # # .
                . # . # .
                . . . . .
                . . . . .
    """)
    basic.pause(200)
    basic.show_leds("""
        . # # # .
                . # . # .
                . . . . .
                . . . . .
                . . . . .
    """)
    basic.pause(200)
    basic.show_leds("""
        . # . # .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
    basic.pause(200)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
def girar_90_iz():
    basic.show_leds("""
        . . # # .
                . # # . .
                . . # # .
                . . . . .
                . . . . .
    """)
def normalidad():
    basic.show_leds("""
        . . . . .
                . . . . .
                . . # . .
                . # # # .
                . # . # .
    """)
    basic.pause(200)
    basic.show_leds("""
        . . . . .
                . . # . .
                . # # # .
                . # . # .
                . . . . .
    """)
def llegada_de_la_iz():
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . #
                . . . . .
    """)
    basic.pause(200)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . # #
                . . . . .
    """)
    basic.pause(200)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . # #
                . . # # .
                . . . # #
    """)
    basic.pause(200)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . # # .
                . # # . .
                . . # # .
    """)
def subir():
    basic.show_leds("""
        . . # . .
                . # # # .
                . # . # .
                . . . . .
                . . . . .
    """)
def estatico():
    basic.show_leds("""
        . . . . .
                . . # . .
                . # # # .
                . # . # .
                . . . . .
    """)
def avance_a_la_der():
    basic.show_leds("""
        . . # # .
                . . . # #
                . . # # .
                . . . . .
                . . . . .
    """)
    basic.pause(200)
    basic.show_leds("""
        . . . # #
                . . . . #
                . . . # #
                . . . . .
                . . . . .
    """)
    basic.pause(200)
    basic.show_leds("""
        . . . . #
                . . . . .
                . . . . #
                . . . . .
                . . . . .
    """)
    basic.pause(200)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
basic.show_leds("""
    . . . . .
        . . # . .
        . # # # .
        . # . # .
        . . . . .
""")
basic.pause(200)
basic.show_leds("""
    . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
""")
basic.pause(100)
if False:
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
else:
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