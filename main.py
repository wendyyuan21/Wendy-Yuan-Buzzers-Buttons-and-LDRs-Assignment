light_level = 0

def on_forever():
    global light_level
    light_level = input.light_level()
basic.forever(on_forever)
