let x = 0
let y = 0
basic.forever(function on_forever() {
    
    let posX = x
    let posY = y
    let flag = true
    while (1) {
        led.plot(posX, posY)
        basic.pause(200)
        led.unplot(posX, posY)
        if (flag) {
            posX += 1
            if (posX > 4) {
                posX -= 1
                flag = false
                posY += 1
                if (posY > 4) {
                    break
                }
                
            }
            
        } else {
            posX -= 1
            if (posX < 0) {
                posX += 1
                flag = true
                posY += 1
            }
            
        }
        
    }
})
