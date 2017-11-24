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



function Animation(targetDiv) {
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

  this.frames = {
    walk: this.player.walk.down.length - 1,
    idle: this.player.idle.down.length - 1
  }

  this.counter = {
    walk: 0,
    idle: 0
  }

  this.active = {
    walk: true,
    idle: false
  }


  console.log(this.player)

  this.update = function() {
    if (this.active.walk) {
      if (this.counter.walk < this.frames.walk) {
        this.counter.walk++
      } else {
        this.counter.walk = 0
      }
    } else {
      if (this.counter.idle < this.frames.idle) {
        this.counter.idle++
      } else {
        this.counter.idle = 0
      }
    }
    // console.log(this.counter.idle)
    this.active.walk ?
      targetDiv.style.backgroundImage = 'url('+this.player.walk.up[this.counter.walk].src+')' :
      targetDiv.style.backgroundImage = 'url('+this.player.idle.up[this.counter.idle].src+')'
  }



}




var animate = new Animation(document.querySelector('#player'))
var loop = setInterval(function() {
  animate.update()
}, 33)
