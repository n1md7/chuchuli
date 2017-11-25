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
    bread: 10,
    meat: 10,
    gold: 10,
    warrior: 10,
    chicken: 10,
    peasant:10
  }
  this.coefficient = {
    bread: 1.1,
    peasant: 1.2,
    pork: 1.1,
    chicken: 1.1,
    warrior:1.2
  }
  this.default = function() {
    this.treasure.bread = 10
    this.treasure.meat = 10
    this.treasure.gold = 10
    this.treasure.warrior = 10
    this.treasure.peasant = 10

    this.coefficient.bread = 1.1
    this.coefficient.peasant = 0.8
    this.coefficient.warrior = 0.9
    this.coefficient.pork = 1.3
    this.coefficient.chicken = 1.2
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






window.addEventListener('load', function() {

}, false)






var animate = new Animation(document.querySelector('#player'))
var loop = setInterval(function() {
  animate.update()
}, 60)

//################# 

var playertreasure = new Create_object('player') 

function counting(index){
var myBlocks = new Block().blocks
playertreasure.treasure.chicken=Math.round((0.8+playertreasure.treasure.peasant/(playertreasure.treasure.chicken+playertreasure.treasure.peasant))*playertreasure.treasure.chicken*myBlocks[index].quantity_affect[1]*playertreasure.coefficient.chicken-0.1*(playertreasure.coefficient.peasant*playertreasure.treasure.peasant+playertreasure.coefficient.warrior*playertreasure.treasure.warrior));
playertreasure.treasure.meat=Math.round((0.8+playertreasure.treasure.peasant/(playertreasure.treasure.meat+playertreasure.treasure.peasant))*playertreasure.treasure.meat*myBlocks[index].quantity_affect[2]*playertreasure.coefficient.pork-0.1*(playertreasure.coefficient.peasant*playertreasure.treasure.peasant+playertreasure.coefficient.warrior*playertreasure.treasure.warrior));

playertreasure.treasure.gold=playertreasure.treasure.gold*myBlocks[index].quantity_affect[5] + 0.1*(playertreasure.treasure.bread*myBlocks[index].quantity_affect[0]*myBlocks[index].change_affect[0] + playertreasure.treasure.meat*myBlocks[index].quantity_affect[1]+playertreasure.treasure.chicken*myBlocks[index].quantity_affect[2]-playertreasure.treasure.peasant*myBlocks[index].quantity_affect[3]*myBlocks[index].change_affect[3] - playertreasure.treasure.warrior*myBlocks[index].quantity_affect[4]*myBlocks[index].change_affect[4]);
var gold=Math.round(playertreasure.treasure.gold);
console.log(gold);
$("#goldspan").text(gold);

$("#chickenspan").text(playertreasure.treasure.chicken);
$("#porkspanspan").text(playertreasure.treasure.meat);


}

function walking(position, index = 0) {

  if (index >= position) {
    animate.active.walk = false
    $('.block').removeClass('curr_active')
    $('#s' + animate.position.index).addClass('curr_active')
    document.querySelector('#random')
      .removeAttribute('disabled')
      counting(animate.position.index)
    return
  }
  var margin = 8
  if (animate.position.index >= 20) {
    animate.position.index = 0
  }

  if (animate.position.index < 5) {
    animate.position.x -= margin
    $('#player').css("margin-left", animate.position.x + "vh")
    animate.goingReset("left")
    animate.going.left = true
  } else if (animate.position.index >= 5 && animate.position.index < 10) {
    animate.position.y -= margin
    animate.goingReset("up")
    animate.going.up = true
    $('#player').css("margin-top", animate.position.y + "vh")
  } else if (animate.position.index >= 10 && animate.position.index < 15) {
    animate.position.x += margin
    animate.goingReset("right")
    animate.going.right = true
    $('#player').css("margin-left", animate.position.x + "vh")
  } else if (animate.position.index >= 15 && animate.position.index < 20) {
    animate.position.y += margin
    animate.goingReset("down")
    animate.going.down = true
    $('#player').css("margin-top", animate.position.y + "vh")
  }

  animate.active.walk = true

  animate.position.index++

    setTimeout(walking, 1000, position, ++index)
}


document.querySelector('#random')
  .addEventListener('click', function() {
    this.setAttribute('disabled', 'true')
    var randomnumber = getRandomInt(1, 6)
    dice3d(6, randomnumber, function() {
      walking(randomnumber)
    });
    $('#dice3d-table').css({
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      margin: 'auto',
      width: '50px',
      heigth: '50px',
      transform: "translate(0px,-20px)"
    })


  }, false)



for (var i = 0; len = document.getElementsByClassName('block').length, i < len; i++) {
  var myBlocks = new Block().blocks
  for (var j = 0; j < myBlocks.length; j++) {

    var name = myBlocks[i].name
    var names = name.split(' ')
    names.forEach(function(element, index) {
      names[index] = element.substring(0, 1).toUpperCase()
    })
    document.getElementById('s' + myBlocks[i].index).innerHTML = names.join('')
  }
}







