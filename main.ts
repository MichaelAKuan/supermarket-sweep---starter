namespace SpriteKind {
    export const Grocery = SpriteKind.create()
    export const CartItem = SpriteKind.create()
}
function addtoCart(grocery: Sprite) {
    item = sprites.create(grocery.image, SpriteKind.CartItem)
    item.follow(wallmartboy)
    item.x = wallmartboy.x
    item.y = wallmartboy.y
    let cost = sprites.readDataNumber(grocery, "cost")
    subtotal += cost
    textSprite.setText("$" + subtotal)
}
function createTextSprite() {
    textSprite = textsprite.create("$0")
    textSprite.setPosition(6, 6)
    textSprite.setFlag(SpriteFlag.RelativeToCamera, true)
}
sprites.onOverlap(SpriteKind.Grocery, SpriteKind.Player, function (s, otherSprite) {
    if (controller.A.isPressed()) {
        addtoCart(s)
        pause(100)
    }
})
function createProduct(productImg: Image, cost: number, weight: number, name: string) {
    p = sprites.create(productImg, SpriteKind.Grocery)
    sprites.setDataNumber(p, "cost", cost)
    sprites.setDataNumber(p, "weight", weight)
    sprites.setDataString(p, "name", name)
    tiles.placeOnRandomTile(p, assets.tile`tile1`)
}
function createAllProducts() {
    for (let i = 0; i <= groceryImages.length - 1; i++) {
        image2 = groceryImages[i]
        name = groceryNames[i]
        cost = groceryCosts[i]
        weight = groceryWeights[i]
        createProduct(image2, cost, weight, name)
    }
}
let weight = 0
let cost = 0
let name = ""
let image2: Image = null
let p: Sprite = null
let textSprite: TextSprite = null
let item: Sprite = null
let wallmartboy: Sprite = null
let groceryCosts: number[] = []
let groceryWeights: number[] = []
let groceryNames: string[] = []
let groceryImages: Image[] = []
groceryImages = [
    img`
    . . . 2 2 2 . . . . . . . . . . 
    . . . c c c 6 6 8 8 . . . . . . 
    . . 6 1 1 1 1 1 9 6 8 . . . . . 
    . 6 1 1 1 1 1 1 8 9 6 8 . . . . 
    6 1 1 1 1 1 1 8 . 8 9 8 . . . . 
    6 1 1 1 1 1 1 8 . 8 9 8 . . . . 
    8 9 1 1 1 1 1 8 . 8 9 8 . . . . 
    8 9 1 1 1 1 1 8 8 9 9 8 . . . . 
    8 9 9 9 9 9 9 9 9 9 9 8 . . . . 
    8 6 9 9 9 9 9 9 9 9 9 8 . . . . 
    . 8 6 9 9 9 9 9 9 9 6 8 . . . . 
    . . 8 8 8 8 8 8 8 8 8 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
    img`
    . . . . . . . 6 6 6 . . . . . . 
    . . . . . . . c b c . . . . . . 
    . . . . . c c c b c c c . . . . 
    . . . . c b b b b b b b c . . . 
    . . . . c 1 b b b b b 1 c . . . 
    . . . . c 1 1 7 1 7 1 1 c . . . 
    . . . . c 1 1 1 7 1 1 1 c . . . 
    . . . . c 1 1 a c a 1 1 c . . . 
    . . . . c 1 a c a c a 1 c . . . 
    . . . . c 1 c a c a c 1 c . . . 
    . . . . c 1 a c a c a 1 c . . . 
    . . . . c 1 c a c a 1 1 c . . . 
    . . . . c 1 a c a 1 1 1 c . . . 
    . . . . c b 1 a 1 1 1 b c . . . 
    . . . . c b b b b b b b c . . . 
    . . . . . c c c c c c c . . . . 
    `,
    img`
    . c c c c c c c c c c c c c . . 
    c b b b b b b b b b b b b b c . 
    c b b b b b b b b b b b b b c . 
    c c c c c c c c c c c c c c c . 
    c d d 1 1 1 1 1 1 1 1 1 d d c . 
    c d c c c 1 c c c 1 c c c d c . 
    c d c 1 c 1 c 1 c 1 1 c d d c . 
    c d c 1 c 1 c c c 1 1 c d d c . 
    c d c c c 1 c 1 c 1 1 c d d c . 
    c d d 1 1 1 1 1 1 1 1 1 d d c . 
    c d d 1 1 1 2 2 2 1 1 1 d d c . 
    c d d 1 1 2 8 8 8 2 1 1 d d c . 
    c d d 1 1 2 8 d 8 2 1 1 d d c . 
    c d d 1 1 2 8 6 8 2 1 1 d d c . 
    . c d 1 1 1 2 2 2 1 1 1 d c . . 
    . . c c c c c c c c c c c . . . 
    `,
    img`
    . . . c c c c . . . . . . . . . 
    . . c e e e e c c c . . . . . . 
    . c e e e e e e e e c . . . . . 
    . c e e e e e e e e e c . . . . 
    f e e e e c c c e e e c . b b . 
    f e e e c e e e c c c c c d d b 
    f c e e f e e e e e e e c d d b 
    f c c c f e e e f f f f c b b b 
    f c c c c f f f c c c f . c c . 
    . f c c c c c c c c c f . . . . 
    . f c c c c c c c c f . . . . . 
    . . f f f f f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
    img`
    . . . . . . . . . . . . . . . . 
    . . 6 6 9 9 9 9 . . . . . . . . 
    . 6 9 9 1 1 1 1 9 . . . . . . . 
    6 9 6 9 9 9 1 9 1 9 . . . . . . 
    6 9 9 6 6 6 6 1 1 9 . . . . . . 
    6 9 9 6 9 9 6 1 1 9 . . . . . . 
    . 6 9 6 9 9 6 1 9 . . . . . . . 
    . . 6 9 6 6 1 9 . . . . . . . . 
    . . . 6 9 9 9 . . . . . . . . . 
    . . . . 6 6 . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
    img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c c c c . . . . . 
    . . . c d d d d d d d c . . . . 
    . . c d d d d d b b d d c . . . 
    . . b c d d d d d d d c b . . . 
    . . b 2 c c c c c c c 2 b . . . 
    . . b 2 2 2 2 2 2 2 2 2 b . . . 
    . . b 2 2 2 2 2 2 2 2 2 b . . . 
    . . b 2 2 2 b b b 2 2 2 b . . . 
    . . b 2 2 b 2 2 2 b 2 2 b . . . 
    . . d 1 2 b 2 2 2 b 2 1 d . . . 
    . . d 1 1 b 2 2 2 b 1 1 d . . . 
    . . d 1 1 b 2 2 2 b 1 1 d . . . 
    . . d 1 1 1 b b b 1 1 1 d . . . 
    . . . d 1 1 1 1 1 1 1 d . . . . 
    . . . . d d d d d d d . . . . . 
    `,
    img`
    . . c c c c c c c c c c . . . . 
    . c d d d d d d d c b b c . . . 
    c d d d d d d d c b d b b c . . 
    c c d d d d d d d c b b c c . . 
    c b c c c c c c c c c c b c . . 
    c b 8 9 8 b 8 9 9 9 8 b b c . . 
    c b b 8 9 6 9 6 9 6 9 8 b c . . 
    c b b 8 9 6 9 6 9 6 9 8 b c . . 
    c b 8 9 8 b 8 9 9 9 8 b b c . . 
    . c c c c c c c c c c c c . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
    img`
    . . . . . . . . . . . . . . . . 
    . . . b 1 1 1 1 1 1 1 1 1 . . . 
    . . b 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . b 1 1 1 1 1 1 1 1 1 8 8 . . 
    . . b 1 1 1 1 1 1 1 8 8 8 8 . . 
    . . b 1 1 1 5 5 5 5 8 8 8 8 . . 
    . . b 1 1 5 5 5 5 5 5 8 8 8 . . 
    . . b 1 8 5 5 5 5 5 5 8 8 8 . . 
    . . c 8 8 5 5 5 5 5 5 8 1 1 . . 
    . . c 8 8 5 5 5 5 5 5 1 1 1 . . 
    . . c 8 8 8 5 5 5 5 1 1 1 1 . . 
    . . c 8 8 8 1 1 1 1 1 1 1 1 . . 
    . . c 2 2 2 1 1 1 1 6 6 6 1 . . 
    . . b 1 2 1 1 1 1 1 1 1 1 1 . . 
    . . b 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . . b b b b b b b b b b . . . 
    `,
    img`
    . . . . . . . 6 . . . . . . . . 
    . . . . 6 6 6 6 6 6 6 . . . . . 
    . . 6 6 6 6 7 6 7 6 6 6 6 . . . 
    . 6 6 7 6 6 7 6 7 6 6 7 7 6 . . 
    . 6 6 7 6 7 6 6 7 6 6 7 6 6 . . 
    6 7 6 7 6 7 6 6 7 7 6 7 6 7 6 . 
    6 7 6 7 6 7 6 6 7 7 6 7 6 7 6 . 
    6 7 6 7 6 7 6 6 7 7 6 7 6 7 6 . 
    6 7 6 7 6 7 6 6 7 7 6 7 6 7 6 . 
    6 7 6 7 6 7 6 6 7 7 6 7 6 7 6 . 
    6 7 6 7 6 7 6 6 7 6 6 7 6 7 6 . 
    6 6 6 7 6 7 6 6 7 6 6 7 6 6 6 . 
    . 6 6 7 6 7 6 6 7 6 6 7 6 6 . . 
    . 6 6 7 6 7 7 6 7 6 6 7 6 6 . . 
    . . 6 6 6 6 7 6 7 6 6 6 6 . . . 
    . . . . 6 6 6 6 6 6 6 . . . . . 
    `,
    img`
    . . . . . . . . . . . . . . . . 
    . . . . . d d d d d d d . . . . 
    . . . . . d f f d d f f . . . . 
    . . . . . d d d d d d d . . . . 
    . . . . . d d f d d f d . . . . 
    . . . . . f d d d d d f . . . . 
    . . . . . f d d d d d f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f 1 1 1 f f . . . . 
    . 9 9 9 9 f f f f f f f . . . . 
    . . . e . f f f f f f f . . . . 
    . . . e . . . . f . . . . . . . 
    . . . e f f f f f f f f e . . . 
    . . . e . . . . f . e e e 9 9 9 
    . . . . . . . . f . . . e . . . 
    . . . . . . . f . f . . . . . . 
    `,
    img`
    . . . f . f . . f . f . f . . . 
    . . . f f f f f f f f f f . . . 
    . . . f f f f e e f f f f . . . 
    . e e f e 1 e e e e 1 e f e e . 
    . f . f e 9 e d d e 9 e f . f . 
    . 5 . f e e e 5 7 e e e f . 5 . 
    . . . f f f f 1 7 f f f f . . . 
    . . . f f d f 1 7 f d f f . . . 
    2 2 5 f f f 1 1 1 1 f f e . f . 
    2 5 2 e f f 1 f 1 1 f f e e e . 
    2 e e e f f f f f f f f e . . . 
    2 f 2 e 2 2 e e e e 2 2 e . . . 
    2 . . e 2 5 2 2 2 2 5 2 e . . . 
    2 . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . . 2 e 2 . 2 e 2 2 . . . . 
    . . . . f f . . . f f . . . . . 
    `
]
groceryNames = [
    "Milk",
    "Grape Soda",
    "Oatmeal",
    "Turkey",
    "Fancy glass",
    "Chicken soup",
    "Sardines",
    "Flour",
    "Watermelon",
    "noch",
    "Katie"
]
groceryWeights = [
    8,
    2,
    1,
    12,
    0.5,
    0.5,
    0.5,
    5,
    10,
    7,
    0.78
]
groceryCosts = [
    2,
    3,
    4,
    20,
    10,
    2,
    1,
    5,
    3,
    10,
    18
]
scene.setBackgroundColor(13)
tiles.setTilemap(tilemap`level`)
wallmartboy = sprites.create(img`
    ..............................
    ..fffff.......................
    ..ffffd.......................
    ..ffdd9.......................
    ...dddf.....ffff..............
    ...dddd.....affa..............
    ...88.......ffff..............
    ..88ddd589889889889...........
    ..811....8.ffffff.8...........
    .8888....988ffff889...........
    .8888....8.f8ff8f.8...........
    .8888....9ff9889ff9...........
    .8888.....f.8ff8.f8...........
    .8888......9888989............
    .d.d.......8.f.f..............
    .d..d......55f5f55............
    .8..88......f....f............
    `, SpriteKind.Player)
controller.moveSprite(wallmartboy)
scene.cameraFollowSprite(wallmartboy)
tiles.placeOnTile(wallmartboy, tiles.getTileLocation(0, 3))
wallmartboy.startEffect(effects.coolRadial)
createProduct(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 9 . . . . . . . . . . . 
    . . . . 9 . f f f f . . . . . . 
    . . . . 9 . a f f a . . . . . . 
    . . . . 9 . f f f f . . . . . . 
    . . . . 9 . . f f . . . . . . . 
    . . . . f . . f f . . f . . . . 
    . . . . e . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f . . f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, 1, 1, "Hello")
createAllProducts()
createTextSprite()
let subtotal = 0