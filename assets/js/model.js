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
    this.counter.index = 0
    this.counter.year = 1
    this.counter.plague = 1
    this.counter.war = 1

  }
}



function Animation(targetDiv) {
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
    walk: false,
    idle: true
  }

  this.going = {
    up: false,
    down: false,
    right: false,
    left: true
  }

  this.position = {
    index: 0,
    x: 40,
    y: 40
  }

  this.goingReset = function(e) {
    this.going.right = e == "right" ? true : false
    this.going.left = e == "left" ? true : false
    this.going.up = e == "up" ? true : false
    this.going.down = e == "down" ? true : false
  }




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


    if (this.active.walk) {
      switch (true) {
        case this.going.up:
          targetDiv.style.backgroundImage = 'url(' + this.player.walk.up[this.counter.walk].src + ')'
          break
        case this.going.down:
          targetDiv.style.backgroundImage = 'url(' + this.player.walk.down[this.counter.walk].src + ')'
          break
        case this.going.left:
          targetDiv.style.backgroundImage = 'url(' + this.player.walk.left[this.counter.walk].src + ')'
          break
        case this.going.right:
          targetDiv.style.backgroundImage = 'url(' + this.player.walk.right[this.counter.walk].src + ')'
          break
      }
    } else {
      switch (true) {
        case this.going.up:
          targetDiv.style.backgroundImage = 'url(' + this.player.idle.up[this.counter.idle].src + ')'
          break
        case this.going.down:
          targetDiv.style.backgroundImage = 'url(' + this.player.idle.down[this.counter.idle].src + ')'
          break
        case this.going.left:
          targetDiv.style.backgroundImage = 'url(' + this.player.idle.left[this.counter.idle].src + ')'
          break
        case this.going.right:
          targetDiv.style.backgroundImage = 'url(' + this.player.idle.right[this.counter.idle].src + ')'
          break
      }
    }

  }

}



function Game(){
  this.title = [
    {
      name: 'Plague',
      affect: 20, //per cent
      index: 15
    },{

    }

  ]
}






var animate = new Animation(document.querySelector('#player'))
var loop = setInterval(function() {
  animate.update()
}, 60)



function walking(position, index = 0) {
  if (index >= position) {
    animate.active.walk = false
    $('.block').removeClass('curr_active')
    $('#s' + animate.position.index).addClass('curr_active')
    document.querySelector('#random')
      .removeAttribute('disabled')
    return
  }
  var margin = 8
  if (animate.position.index >= 20) {
    animate.position.index = 0
  }

  if (animate.position.index < 5) {
    animate.position.x -= margin
    $('#player').css("margin-left", animate.position.x + "vw")
    animate.goingReset("left")
    animate.going.left = true
  } else if (animate.position.index >= 5 && animate.position.index < 10) {
    animate.position.y -= margin
    animate.goingReset("up")
    animate.going.up = true
    $('#player').css("margin-top", animate.position.y + "vw")
  } else if (animate.position.index >= 10 && animate.position.index < 15) {
    animate.position.x += margin
    animate.goingReset("right")
    animate.going.right = true
    $('#player').css("margin-left", animate.position.x + "vw")
  } else if (animate.position.index >= 15 && animate.position.index < 20) {
    animate.position.y += margin
    animate.goingReset("down")
    animate.going.down = true
    $('#player').css("margin-top", animate.position.y + "vw")
  }

  animate.active.walk = true

  animate.position.index++

    setTimeout(walking, 1000, position, ++index)
}


document.querySelector('#random')
  .addEventListener('click', function() {
    this.setAttribute('disabled', 'true')
    var randomnumber = getRandomInt(1, 6)
    $('#randomnumber').text(randomnumber);
    walking(randomnumber)

  }, false)


//  temp undanimate.position.index waishalos


var el = document.getElementById('player')