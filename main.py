x = 0
y = 0
def on_forever():
    global x, y
    posX = x
    posY = y
    flag = True
    while 1:
        led.plot(posX, posY)
        basic.pause(200)
        led.unplot(posX, posY)
        if flag:
            posX += 1
            if posX > 4:
                posX -= 1
                flag = False
                posY += 1
                if posY > 4:
                    break
        else:
            posX -= 1
            if posX < 0:
                posX += 1
                flag = True
                posY += 1
basic.forever(on_forever)