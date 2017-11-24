function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fill(e) {
  var a = []
  for (var i = 0; i < e; i++)
    a.push(i < 10 ? '0' + i : i)
  return a
}


function Create_object(name) {
  this.name = name
  this.counter = {
    year: 1,
    plague: 1,
    war: 1
  }
  this.treasure = {
    bread: 0,
    meat: 0,
    gold: 0,
    warrior: 0
  }
  this.coefficient = {
    bread: 0,
    peasant: 0,
    pork: 0,
    chicken: 0
  }
  this.default = function() {
    this.treasure.bread = 10
    this.treasure.meat = 10
    this.treasure.gold = 10
    this.treasure.warrior = 10

    this.coefficient.bread = 1
    this.coefficient.peasant = 1
    this.coefficient.pork = 1
    this.coefficient.chicken = 1

    this.counter.year = 1
    this.counter.plague = 1
    this.counter.war = 1

  }
}



function Animation() {
  // jQuery('</div>',{
  //   id: 'player'
  // }).appendTo('body')
  //
  // this.element = $('#player').css({
  //   'width':'100px',
  //   'height':'100px',
  //   'position':'absolute',
  //   'left':'0',
  //   'top':'0'
  // })

  this.player = {
    walk: {
      down: new Array(),
      right: new Array(),
      up: new Array(),
      left: new Array()
    },
    idle: {
      down: new Array(),
      right: new Array(),
      up: new Array(),
      left: new Array()
    }
  }

  fill(15).forEach(function(e, i) {
    let down = new Image()
    down.src = './assets/img/crusader_walk_000' + e + '.png'
    this.player.walk.down.push(down)

    let right = new Image()
    right.src = './assets/img/crusader_walk_200' + e + '.png'
    this.player.walk.right.push(right)

    let up = new Image()
    up.src = './assets/img/crusader_walk_400' + e + '.png'
    this.player.walk.up.push(up)

    let left = new Image()
    left.src = './assets/img/crusader_walk_600' + e + '.png'
    this.player.walk.left.push(left)
  }, this)


  fill(16).forEach(function(e, i) {
    let down = new Image()
    down.src = './assets/img/crusader_idle_000' + e + '.png'
    this.player.idle.down.push(down)

    let right = new Image()
    right.src = './assets/img/crusader_idle_200' + e + '.png'
    this.player.idle.right.push(right)

    let up = new Image()
    up.src = './assets/img/crusader_idle_400' + e + '.png'
    this.player.idle.up.push(up)

    let left = new Image()
    left.src = './assets/img/crusader_idle_600' + e + '.png'
    this.player.idle.left.push(left)
  }, this)

  console.log(this.player)

}


new Animation()
