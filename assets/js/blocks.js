function Block() {
  this.blocks = [{
      name: 'Plague',
      faith_affect:[1.2,1],
      quantity_affect:[1,1,1,0.8,0.9,1],
      change_affect:[1,1,1,1,1,1],
      trade_affect:[0.9,0.9,0.9,1.3,1.2],
      index: 15,
      color: 'rgba(0,0,0,0.8)',
      description: 'the horrible Plague strikes the village!!! your people are affected '
    }, {
      name: 'Bad Neighbour',
      faith_affect:[1.2,1],
      quantity_affect:[1,1,1,0.8,0.9,1],
      change_affect:[1,1,1,1,1,1],
      trade_affect:[0.9,0.9,0.9,1.3,1.2],
      index: 2,
      image: '',
      description: 'Neighbour is plotting against you.'
    }, {
      name: 'Bad Neighbour',
      quantity_affect:[1,1,1,0.8,0.9,1],
      change_affect:[1,1,1,1,1,1],
      trade_affect:[0.9,0.9,0.9,1.3,1.2],
      index: 14,
      image: '',
      description: 'Neighbour is plotting against you.'
    },
    {
      name: 'War',
      quantity_affect:[1,1,1,1,0.9,1],
      change_affect:[0.5,0.5,0.5,1,1,1.9],
      trade_affect:[0.9,0.9,0.9,1.3,1.5],
      index: 7,
      color: 'rgba(255,0,0,0.8)',
      description: 'The war has started!!! warriors will fight, and get the riches, but they use lots of food'
    },
    {
      name: 'multiplying stock',
      quantity_affect:[1,1.2,1.2,1,1,1],
      change_affect:[1,1,1,1,1,1],
      trade_affect:[1,0.8,0.7,1.3,1.2],
      index: 8,
      color: 'rgba(0,255,0,0.8)',
      description: 'the piglets have already grown, and you have become richer then ever'
    }, {
      name: 'Burn the witch',
      quantity_affect:[1,1,1,0.8,1,1],
      change_affect:[1,1,1,1,1,1],
      trade_affect:[0.9,0.9,0.9,1.3,1],
      index: 1,
      color: 'rgba(255,120,0,0.7)',
      description: 'Unusual things happen to your county, you suspect there is a witch in a village'
    },
    {
      name: 'Burn the witch',
      quantity_affect:[1,1,1,0.8,1,1],
      change_affect:[1,1,1,1,1,1],
      trade_affect:[0.9,0.9,0.9,1.3,1],
      index:  10,
      color: 'rgba(255,120,0,0.7)',
      description: 'Unusual things happen to your county, you suspect there is a witch in a village'
    },
    {
      name: 'risky business',
      quantity_affect:[1,1,1,1,1,1.6],
      change_affect:[1,1,1,1,1,1],
      trade_affect:[1.3,1.3,1.2,1.3,1.2],
      index: 3,
      color: 'rgba(234,93,9,0.8)',
      description: 'you can make a good investment in a caravan in china. However, the risks are not as low as you would like them to be'
    },
    {
      name: 'Gone to Rome',
      quantity_affect:[1,1,1,1,1,1],
      change_affect:[1,1.5,1,1,1,0.9],
      trade_affect:[1,1,1,1,1],
      index: 18,
      color: 'rgba(100,100,134,0.4)',
      description: 'faith is important in ones life. you have gone to seek the God in Rome'

    }, {
      name: 'Revenge over Neighbour',
      quantity_affect:[1,1,1,0.8,0.9,1],
      change_affect:[1,1,1,1,1,1.5],
      trade_affect:[0.9,0.9,0.9,1.3,1.2],
      index: 12,
      color: 'rgba(200,20,34,0.8)',
      description: 'Revenge sweet Revenge. Time to get your riches back from Neighbour!'
    }, {
      name: 'Revenge over Neighbour',
      quantity_affect:[1,1,1,0.8,0.9,1],
      change_affect:[1,1,1,1,1,1.5],
      trade_affect:[0.9,0.9,0.9,1.3,1.2],
      index: 17,
      color: 'rgba(200,20,34,0.8)',
      description: 'Revenge sweet Revenge. Time to get your riches back from Neighbour!'
    },
    {
      name: 'more peasants in village',
      quantity_affect:[1,1,1,0.8,0.9,1],
      change_affect:[1,1,1,1,1,1],
      trade_affect:[0.9,0.9,0.9,1.3,1.2],
      index: 4,
      color: 'rgba(200,20,234,0.8)',
      description: 'You can hire villagers cheaper!!!'
    },
    {
      name: 'dying stock',
      quantity_affect:[1,0.8,0.8,1,1,1],
      change_affect:[1,1,1,1,1,1],
      trade_affect:[0.9,0.9,0.9,1.3,1.2],
      index: 5,
      color: 'rgba(200,70,34,0.6)',
      description: 'The stock is dying!!! the prices for stock skyrocketed!!!'
    }, {
      name: 'Gift from King!!!',
      quantity_affect:[1,1,1,1,1,1.4],
      change_affect:[1,1,0.7,1,1,2],
      trade_affect:[1,1,1,1.3,1.2],
      index: 0,
      color: 'rgba(20,20,234,0.8)',
      description: 'His majesty, The king has decided to gift you money'
    },
    {
      name: 'family matters',
      quantity_affect:[1,1,1,1,1,0.9],
      change_affect:[1,1,1,1,1,0.8],
      trade_affect:[1,1,1,1,1],
      index: 9,
      color: 'rgba(200,20,234,0.55)',
      description: 'It is a tryuly majestic day!!! your sun has been born. but it will definitely affect your pocket'
    },
    {
      name: 'taxes',
      quantity_affect:[1,1,1,1,1,0.9],
      change_affect:[1,1,1.3,1,1,0.6],
      trade_affect:[0.9,0.9,0.9,1.3,1.2],
      index: 11,
      color: 'rgba(200,0,134,0.39)',
      description: 'king expects you to pay your taxes. the amount will definitely affect your relation with him'

    },
    {
      name: 'great harvest',
      quantity_affect:[1,1,1,1,1,1],
      change_affect:[1.4,1,1,1,1,1],
      trade_affect:[0.9,1,1,1.3,1.2],
      index: 19,
      color: 'rgba(20,220,34,0.81)',
      description: 'such a great harvest has not been seen in decades.'
    },
    {
      name: 'great harvest',
      quantity_affect:[1,1,1,1,1,1],
      change_affect:[1.4,1,1,1,1,1],
      trade_affect:[0.9,1,1,1.3,1.2],
      index: 16,
      color: 'rgba(20,220,34,0.81)',
      description: 'such a great harvest has not been seen in decades.'

    },
    {
      name: 'group of mercenaries',
      quantity_affect:[1,1,1,0.8,0.9,1],
      change_affect:[1,1,1,1,1,1],
      trade_affect:[1,1,1,1,0.6],
      index: 13,
      color: 'rgba(120,97,68,0.73)',
      description: 'group of cheap good mercenaries approach town.'

    }, {
      name: 'piligrimage',
      quantity_affect:[1,1,1,1,1,1],
      change_affect:[1,1,1,1,1,1],
      trade_affect:[0.9,0.9,0.9,1.3,1.2],
      index: 6,
      color: 'rgba(150,20,64,0.65)',
      description: 'your peasants go to piligrimage. That is not good.'
    }
  ]
}
