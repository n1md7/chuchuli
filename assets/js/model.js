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
  jQuery('</div>',{
    id: 'player'
  }).appendTo('body')

  this.element = $('#player').css({
    'width':'100px',
    'height':'100px',
    'position':'absolute',
    'left':'0',
    'top':'0'
  })

}


new Animation()
