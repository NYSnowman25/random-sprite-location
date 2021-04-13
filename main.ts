controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(randint(15, 145), randint(15, 105))
    sprite2.setPosition(randint(15, 145), randint(15, 105))
    sprite3.setPosition(randint(15, 145), randint(15, 105))
    sprite4.setPosition(randint(15, 145), randint(15, 105))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.say("Whoops!", 1000)
})
let sprite4: Sprite = null
let sprite3: Sprite = null
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
sprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 1 . . 1 . . 1 . . . . 
    . . . . . . 1 . 1 . 1 . . . . . 
    . . . . . . . 1 2 1 . . . . . . 
    . . . . . . 1 2 5 2 1 . . . . . 
    . . . . . . . 1 2 1 . . . . . . 
    . . . . . . . . 1 . . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . 5 7 7 7 7 7 7 7 5 . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . . . 2 . 2 . . . . . . 
    . . . . . . 2 . . . 2 . . . . . 
    . . . . 5 5 . . . . . 5 5 . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
sprite3.setPosition(randint(15, 145), randint(15, 105))
sprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 2 . . 2 . . 2 . . . . 
    . . . . . . 2 . 2 . 2 . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . 2 1 7 1 2 . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . . 2 . . . . . . . 
    . . . . . . . . 5 . . . . . . . 
    . . . . 7 5 5 5 5 5 5 5 7 . . . 
    . . . . . . . . 5 . . . . . . . 
    . . . . . . . . 5 . . . . . . . 
    . . . . . . . . 5 . . . . . . . 
    . . . . . . . 1 . 1 . . . . . . 
    . . . . . . 1 . . . 1 . . . . . 
    . . . . 7 7 . . . . . 7 7 . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
sprite4.setPosition(randint(15, 145), randint(15, 105))
