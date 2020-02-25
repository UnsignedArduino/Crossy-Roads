enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Foward,
    Backward,
    Left,
    Right
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 7 7 7 7 7 7 7 9 9 9 9 
9 9 9 9 7 7 7 7 7 7 7 7 7 9 9 9 
9 9 9 7 7 7 7 7 7 7 7 7 7 7 9 9 
9 9 7 7 7 7 7 7 7 7 7 7 7 7 7 9 
9 9 7 7 7 7 7 7 7 7 7 7 7 7 7 9 
9 9 9 9 7 7 7 7 7 7 7 7 7 7 7 9 
9 9 9 9 9 9 7 7 7 7 7 7 7 7 7 9 
9 9 9 9 7 7 7 7 7 7 7 7 7 7 7 9 
9 9 7 7 7 7 7 7 7 7 7 7 7 7 7 9 
9 9 7 7 7 7 7 7 7 7 7 7 7 7 7 9 
9 9 9 7 7 7 7 7 7 7 7 7 7 7 9 9 
9 9 9 9 7 7 7 7 7 7 7 7 7 9 9 9 
9 9 9 9 9 7 7 7 7 7 7 7 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
}
scene.onOverlapTile(SpriteKind.Food, sprites.vehicle.roadHorizontal, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Food, myTiles.tile1, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.castle.tileGrass1, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Food, sprites.castle.tileGrass3, function (sprite, location) {
    sprite.destroy()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    move("L", Chicken)
    check_for_tiles("R", Chicken)
    animation.setAction(Chicken, ActionKind.Left)
    Timeout = 50
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    move("D", Chicken)
    check_for_tiles("U", Chicken)
    animation.setAction(Chicken, ActionKind.Backward)
    info.changeScoreBy(-1)
    Timeout = 50
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.follow(sprite, 2000)
    sprite.setFlag(SpriteFlag.DestroyOnWall, true)
    otherSprite.setFlag(SpriteFlag.DestroyOnWall, true)
    otherSprite.setFlag(SpriteFlag.Invisible, true)
})
scene.onOverlapTile(SpriteKind.Projectile, myTiles.tile3, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.castle.tileGrass3, function (sprite, location) {
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    OnLog = 1
    sprite.setVelocity(25, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy(effects.spray, 100)
    scene.cameraShake(4, 500)
    otherSprite.say("@$#%&!", 2000)
    Dead = 1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 100)
    otherSprite.destroy(effects.fire, 100)
})
function check_for_tiles (DirectionIfError: string, SpriteToCheck: Sprite) {
    if (SpriteToCheck.tileKindAt(TileDirection.Center, myTiles.tile2)) {
        pause(50)
        if (OnLog == 0) {
            SpriteToCheck.destroy(effects.fountain, 100)
            Dead = 1
        }
    } else if (SpriteToCheck.tileKindAt(TileDirection.Center, sprites.builtin.forestTiles0)) {
        move(DirectionIfError, SpriteToCheck)
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    move("R", Chicken)
    check_for_tiles("L", Chicken)
    animation.setAction(Chicken, ActionKind.Right)
    Timeout = 50
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Food, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Projectile, myTiles.tile1, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Food, sprites.castle.tileGrass2, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.builtin.forestTiles0, function (sprite, location) {
    sprite.destroy()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    move("U", Chicken)
    check_for_tiles("D", Chicken)
    animation.setAction(Chicken, ActionKind.Foward)
    info.changeScoreBy(1)
    Timeout = 50
})
scene.onOverlapTile(SpriteKind.Food, myTiles.tile3, function (sprite, location) {
    sprite.destroy()
})
function move (Direction: string, SpriteToMove: Sprite) {
    if (Direction == "U") {
        SpriteToMove.setVelocity(0, 0)
        OnLog = 0
        ChickenY += -1
    } else if (Direction == "D") {
        SpriteToMove.setVelocity(0, 0)
        OnLog = 0
        ChickenY += 1
    } else if (Direction == "L") {
        SpriteToMove.setVelocity(0, 0)
        OnLog = 0
        ChickenX += -1
    } else if (Direction == "R") {
        SpriteToMove.setVelocity(0, 0)
        OnLog = 0
        ChickenX += 1
    }
    tiles.placeOnTile(SpriteToMove, tiles.getTileLocation(ChickenX, ChickenY))
}
scene.onOverlapTile(SpriteKind.Food, sprites.builtin.forestTiles0, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Food, sprites.castle.tileGrass1, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.castle.tileGrass2, function (sprite, location) {
    sprite.destroy()
})
let Eagle: Sprite = null
let Log: Sprite = null
let Car: Sprite = null
let ChickenY = 0
let ChickenX = 0
let OnLog = 0
let Timeout = 0
let Dead = 0
let Chicken: Sprite = null
Chicken = sprites.create(img`
. . . . . . . 2 2 . . . . . . . 
. . . . . 1 1 2 2 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . d 1 1 1 1 1 1 d . . . . 
. . . . d 1 d d d d 1 d . . . . 
. . . . d 1 d d d d 1 d . . . . 
. . . . d 1 d d d d 1 d . . . . 
. . . . . 1 d d d d 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 4 . . 4 . . . . . . 
. . . . . . 4 . . 4 . . . . . . 
. . . . . . 4 . . 4 . . . . . . 
. . . . . 4 4 4 4 4 4 . . . . . 
`, SpriteKind.Player)
Chicken.setFlag(SpriteFlag.StayInScreen, true)
Chicken.setFlag(SpriteFlag.ShowPhysics, false)
scene.setBackgroundColor(7)
tiles.setTilemap(tiles.createTilemap(
            hex`0a0010000909090909090909090903010103010501070503020202020202020202020f0f020f020f0202020f020f0f02020f0f020f0f0909090909090909090903010301010101010603030101010701010103030909090909090909090909090909090909090909030301010103010103030303070105010101030303030105010101030303030301010101010103030303010701010101030303030303030303030303`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,sprites.builtin.forestTiles0,sprites.builtin.forestTiles24,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.vehicle.roadVertical,sprites.vehicle.roadHorizontal,sprites.castle.tilePath1,sprites.castle.tilePath6,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.builtin.crowd8,myTiles.tile3],
            TileScale.Sixteen
        ))
scene.cameraFollowSprite(Chicken)
info.setScore(0)
Dead = 0
let DeadTimeout = 20
Timeout = 50
OnLog = 0
let CarSpawnListLeft = [9, 5]
let CarSpawnListRight = [8, 0]
let LogSpawnListLeft = [2]
let LogSpawnListRight: number[] = []
ChickenX = 4
ChickenY = 13
let ChickenFowardAnim = animation.createAnimation(ActionKind.Foward, 100)
ChickenFowardAnim.addAnimationFrame(img`
. . . . . . . 2 2 . . . . . . . 
. . . . . 1 1 2 2 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . d 1 1 1 1 1 1 d . . . . 
. . . . d 1 d d d d 1 d . . . . 
. . . . d 1 d d d d 1 d . . . . 
. . . . d 1 d d d d 1 d . . . . 
. . . . . 1 d d d d 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 4 . . 4 . . . . . . 
. . . . . . 4 . . 4 . . . . . . 
. . . . . . 4 . . 4 . . . . . . 
. . . . . 4 4 4 4 4 4 . . . . . 
`)
animation.attachAnimation(Chicken, ChickenFowardAnim)
let ChickenBackwardAnim = animation.createAnimation(ActionKind.Backward, 100)
ChickenBackwardAnim.addAnimationFrame(img`
. . . . . . . 2 2 . . . . . . . 
. . . . . 1 1 2 2 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 f 1 1 f 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 4 4 1 1 . . . . . 
. . . . d 1 1 4 4 1 1 d . . . . 
. . . . d 1 1 1 1 1 1 d . . . . 
. . . . d 1 1 1 1 1 1 d . . . . 
. . . . d 1 1 1 1 1 1 d . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 4 . . 4 . . . . . . 
. . . . . . 4 . . 4 . . . . . . 
. . . . . . 4 . . 4 . . . . . . 
. . . . . 4 4 4 4 4 4 . . . . . 
`)
animation.attachAnimation(Chicken, ChickenBackwardAnim)
let ChickenLeftAnim = animation.createAnimation(ActionKind.Left, 100)
ChickenLeftAnim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . 2 2 . . . . . . . . . . 
. . . 1 1 1 1 1 . . . . . . . . 
. . . 1 1 1 1 1 . . . . . . . . 
. . 4 1 1 1 1 1 . . . . . . . . 
. . 4 1 1 1 1 1 . . . . . . . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . 
. . . 1 1 d d d d d d d 1 d . . 
. . . 1 1 d d d d d d d 1 d . . 
. . . 1 1 d d d d d d d 1 d . . 
. . . 1 1 1 d d d d d d 1 d . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . 
. . . . . . . . . 4 . . . . . . 
. . . . . . . . . 4 . . . . . . 
. . . . . . . . . 4 . . . . . . 
. . . . . . . . 4 4 4 . . . . . 
`)
animation.attachAnimation(Chicken, ChickenLeftAnim)
let ChickenRightAnim = animation.createAnimation(ActionKind.Right, 100)
let LeftFlipped = img`
. . . . . . . . . . . . . . . . 
. . . . 2 2 . . . . . . . . . . 
. . . 1 1 1 1 1 . . . . . . . . 
. . . 1 1 1 1 1 . . . . . . . . 
. . 4 1 1 1 1 1 . . . . . . . . 
. . 4 1 1 1 1 1 . . . . . . . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . 
. . . 1 1 d d d d d d d 1 d . . 
. . . 1 1 d d d d d d d 1 d . . 
. . . 1 1 d d d d d d d 1 d . . 
. . . 1 1 1 d d d d d d 1 d . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . 
. . . . . . . . . 4 . . . . . . 
. . . . . . . . . 4 . . . . . . 
. . . . . . . . . 4 . . . . . . 
. . . . . . . . 4 4 4 . . . . . 
`
LeftFlipped.flipX()
ChickenRightAnim.addAnimationFrame(LeftFlipped)
animation.attachAnimation(Chicken, ChickenRightAnim)
animation.setAction(Chicken, ActionKind.Foward)
tiles.placeOnTile(Chicken, tiles.getTileLocation(ChickenX, ChickenY))
game.onUpdateInterval(100, function () {
    if (Math.percentChance(50)) {
        if (Math.percentChance(50)) {
            if (Math.percentChance(33)) {
                Car = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . 2 4 2 2 2 2 2 2 c 2 . . . 
. . 2 c 4 2 2 2 2 2 2 c c 2 . . 
. 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
. 2 c 2 e e e e e e e b c 4 2 2 
. 2 2 e b b e b b b e e b 4 2 2 
. 2 e b b b e b b b b e 2 2 2 2 
. e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
. e e e e e e f e e e f e 2 d d 
. e e e e e e f e e f e e e 2 d 
. e e e e e e f f f e e e e e e 
. e f f f f e e e e f f f e e e 
. . f f f f f e e f f f f f e . 
. . . f f f . . . . f f f f . . 
. . . . . . . . . . . . . . . . 
`, 50, 0)
            } else if (Math.percentChance(50)) {
                Car = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . 6 6 6 6 6 6 6 6 . . . . 
. . . 6 9 6 6 6 6 6 6 c 6 . . . 
. . 6 c 9 6 6 6 6 6 6 c c 6 . . 
. 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
. 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
. 6 6 8 b b 8 b b b 8 8 b 9 6 6 
. 6 8 b b b 8 b b b b 8 6 6 6 6 
. 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
. 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
. 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
. 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
. 8 f f f f 8 8 8 8 f f f 8 8 8 
. . f f f f f 8 8 f f f f f 8 . 
. . . f f f . . . . f f f f . . 
. . . . . . . . . . . . . . . . 
`, 50, 0)
            } else {
                Car = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . 3 3 3 3 3 3 3 3 . . . . 
. . . 3 d 3 3 3 3 3 3 c 3 . . . 
. . 3 c d 3 3 3 3 3 3 c c 3 . . 
. 3 c c d d d d d d 3 c c d 3 d 
. 3 c 3 a a a a a a a b c d 3 3 
. 3 3 a b b a b b b a a b d 3 3 
. 3 a b b b a b b b b a 3 3 3 3 
. a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
. a a a a a a f a a a f a 3 d d 
. a a a a a a f a a f a a a 3 d 
. a a a a a a f f f a a a a a a 
. a f f f f a a a a f f f a a a 
. . f f f f f a a f f f f f a . 
. . . f f f . . . . f f f f . . 
. . . . . . . . . . . . . . . . 
`, 50, 0)
            }
            tiles.placeOnTile(Car, tiles.getTileLocation(0, CarSpawnListLeft[Math.randomRange(0, CarSpawnListLeft.length)]))
        } else {
            if (Math.percentChance(33)) {
                Car = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 . . 
. . . . . 2 c 2 2 2 2 2 2 4 2 . 
. . . . 2 c c 2 2 2 2 2 2 4 c 2 
. . d 2 4 c c 2 4 4 4 4 4 4 c c 
. d 2 2 4 c b e e e e e e e 2 c 
. 2 2 2 4 b e e b b b e b b e 2 
. 2 2 2 2 2 e b b b b e b b b e 
. 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
. 2 d d 2 e f e e e f e e e e e 
. d d 2 e e e f e e f e e e e e 
. e e e e e e e f f f e e e e e 
. e e e e f f f e e e e f f f f 
. . . e f f f f f e e f f f f f 
. . . . f f f f . . . . f f f . 
. . . . . . . . . . . . . . . . 
`, -50, 0)
            } else if (Math.percentChance(50)) {
                Car = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 6 6 . . 
. . . . . 6 c 6 6 6 6 6 6 9 6 . 
. . . . 6 c c 6 6 6 6 6 6 9 c 6 
. . d 6 9 c c 6 9 9 9 9 9 9 c c 
. d 6 6 9 c b 8 8 8 8 8 8 8 6 c 
. 6 6 6 9 b 8 8 b b b 8 b b 8 6 
. 6 6 6 6 6 8 b b b b 8 b b b 8 
. 6 6 6 6 8 6 6 6 6 6 8 6 6 6 8 
. 6 d d 6 8 f 8 8 8 f 8 8 8 8 8 
. d d 6 8 8 8 f 8 8 f 8 8 8 8 8 
. 8 8 8 8 8 8 8 f f f 8 8 8 8 8 
. 8 8 8 8 f f f 8 8 8 8 f f f f 
. . . 8 f f f f f 8 8 f f f f f 
. . . . f f f f . . . . f f f . 
. . . . . . . . . . . . . . . . 
`, -50, 0)
            } else {
                Car = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . 3 3 3 3 3 3 3 3 . . 
. . . . . 3 c 3 3 3 3 3 3 d 3 . 
. . . . 3 c c 3 3 3 3 3 3 d c 3 
. . d 3 d c c 3 d d d d d d c c 
. d 3 3 d c b a a a a a a a 3 c 
. 3 3 3 d b a a b b b a b b a 3 
. 3 3 3 3 3 a b b b b a b b b a 
. 3 3 3 3 a 3 3 3 3 3 a 3 3 3 a 
. 3 d d 3 a f a a a f a a a a a 
. d d 3 a a a f a a f a a a a a 
. a a a a a a a f f f a a a a a 
. a a a a f f f a a a a f f f f 
. . . a f f f f f a a f f f f f 
. . . . f f f f . . . . f f f . 
. . . . . . . . . . . . . . . . 
`, -50, 0)
            }
            tiles.placeOnTile(Car, tiles.getTileLocation(10, CarSpawnListRight[Math.randomRange(0, CarSpawnListLeft.length)]))
        }
    }
    if (Math.percentChance(40)) {
        if (Math.percentChance(50)) {
            Log = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
e e e e e e e e e e e e e e e e 
c c c c c c c c c c c e e e e e 
e e e e e e e e e e e e c c c c 
e c c c c c c c c c c c c e e e 
e e e e e e e e e e e e e e e e 
e c c c c c e e e e c c c c e e 
e e e e e e e e e e e e e c c c 
e e c c c c c c c e e e e e e c 
e e e e e e c c c e e c c e e e 
c c c c c c c c c c c e c c c e 
e e e e e c c c c e e e e e c e 
e e e e e e e e e e e e e e e e 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 25, 0)
            tiles.placeOnTile(Log, tiles.getTileLocation(0, LogSpawnListLeft[Math.randomRange(0, LogSpawnListLeft.length)]))
            Log.setKind(SpriteKind.Food)
        } else {
        	
        }
    }
    if (Dead != 0) {
        if (DeadTimeout > 0) {
            DeadTimeout += -1
        } else {
            game.over(false, effects.melt)
        }
    }
    if (Timeout <= 0) {
        Eagle = sprites.create(img`
. . . . . . d d d d d . . . . . . . 
. . . . . . 1 1 1 1 1 . . . . . . . 
. . . . . . 1 1 1 1 1 . . . . . . . 
. . . . . . e e e e e . . . . . . . 
. . . . . . e e e e e . . . . . . . 
. . . . . . e e e e e . . . . . . . 
. . . . . . e e e e e . . . . . . . 
e e e e e e e e e e e e e e e e e . 
e e e e e e e e e e e e e e e e e . 
e e e e e e e e e e e e e e e e e . 
. . . . . . e e e e e . . . . . . . 
. . . . . . e e e e e . . . . . . . 
. . . . . . e e e e e . . . . . . . 
. . . . . . 1 1 1 1 1 . . . . . . . 
. . . . . . 1 f 1 f 1 . . . . . . . 
. . . . . . 1 1 1 1 1 . . . . . . . 
. . . . . . 1 1 4 1 1 . . . . . . . 
. . . . . . . . 4 . . . . . . . . . 
`, SpriteKind.Enemy)
        tiles.placeOnTile(Eagle, tiles.getTileLocation(ChickenX, ChickenY - 5))
        Eagle.setVelocity(0, 200)
        Dead = 1
        Timeout = 30
    } else {
        Timeout += -1
    }
    if (OnLog == 1) {
        ChickenX += 25 / 16 / 10
    }
    console.log("" + Timeout + ", " + DeadTimeout + ", " + OnLog)
})
