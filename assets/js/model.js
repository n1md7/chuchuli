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
    this.counter.index=0
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

  this.position={
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




var animate = new Animation(document.querySelector('#player'))
var loop = setInterval(function() {
  animate.update()
}, 40)





function walking(rand){
	var a=animate.position.index
	for(var i=0;i<rand;i++){
		
		if(a<5){
			animate.position.x=animate.position.x-8
			$('#player').css("margin-left", animate.position.x+"vw")
		}
		if(a>=5&&a<10){
			animate.position.y=animate.position.y-8
			$('#player').css("margin-top", animate.position.y+"vw")
		}
		if(a>=10&&a<15){
			animate.position.x=animate.position.x+8
			$('#player').css("margin-left", animate.position.x+"vw")
		}
		if(a>=15&&a<20){
			animate.position.y=animate.position.y+8
			$('#player').css("margin-top", animate.position.y+"vw")
		}
		if(a>19){
			a=a-20
		}
		a++


	}
	animate.position.index=animate.position.index+rand;
}

$('#random').click(function() {
      var randomnumber = Math.floor(Math.random() * 6) + 1;
      console.log(randomnumber);
      $('#randomnumber').text(randomnumber);
      walking(randomnumber)
    })


//  temp unda waishalos


var el = document.getElementById('player')
