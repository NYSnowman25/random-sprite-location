controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite2.setPosition(randint(15, 145), randint(15, 105))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(randint(15, 145), randint(15, 105))
})
let sprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 5 . . 5 . . 5 . . . . 
    . . . . . . 5 . 5 . 5 . . . . . 
    . . . . . . . 5 7 5 . . . . . . 
    . . . . . . 5 7 2 7 5 . . . . . 
    . . . . . . . 5 7 5 . . . . . . 
    . . . . . . . . 5 . . . . . . . 
    . . . . . . . . 1 . . . . . . . 
    . . . . 2 1 1 1 1 1 1 1 2 . . . 
    . . . . . . . . 1 . . . . . . . 
    . . . . . . . . 1 . . . . . . . 
    . . . . . . . . 1 . . . . . . . 
    . . . . . . . 7 . 7 . . . . . . 
    . . . . . . 7 . . . 7 . . . . . 
    . . . . 2 2 . . . . . 2 2 . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(randint(15, 145), randint(15, 105))
sprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 7 . . 7 . . 7 . . . . 
    . . . . . . 7 . 7 . 7 . . . . . 
    . . . . . . . 7 5 7 . . . . . . 
    . . . . . . 7 5 2 5 7 . . . . . 
    . . . . . . . 7 5 7 . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . . . . 2 . . . . . . . 
    . . . . 1 2 2 2 2 2 2 2 1 . . . 
    . . . . . . . . 2 . . . . . . . 
    . . . . . . . . 2 . . . . . . . 
    . . . . . . . . 2 . . . . . . . 
    . . . . . . . 5 . 5 . . . . . . 
    . . . . . . 5 . . . 5 . . . . . 
    . . . . 1 1 . . . . . 1 1 . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
sprite2.setPosition(randint(15, 145), randint(15, 105))
