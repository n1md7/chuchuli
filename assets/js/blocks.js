function Block() {
  this.blocks = [{
      name: 'Plague',
      faith_affect:[1.2,1],
      quantity_affect:[1,1,1,0.8,0.9,1],
      change_affect:[1,1,1,1,1,1],
      trade_affect:[0.9,0.9,0.9,1.3,1.2],
      index: 15,
      image: '',
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
      image: '',
      description: 'The war has started!!! warriors will fight, and get the riches, but they use lots of food'
    },
    {
      name: 'multiplying stock',
      quantity_affect:[1,1.2,1.2,1,1,1],
      change_affect:[1,1,1,1,1,1],
      trade_affect:[1,0.8,0.7,1.3,1.2],
      index: 8,
      image: '',
      description: 'the piglets have already grown, and you have become richer then ever'
    }, {
      name: 'Burn the witch',
      quantity_affect:[1,1,1,0.8,1,1],
      change_affect:[1,1,1,1,1,1],
      trade_affect:[0.9,0.9,0.9,1.3,1],
      index: 1,
      image: '',
      description: 'Unusual things happen to your county, you suspect there is a witch in a village'
    },
    {
      name: 'Burn the witch',
      quantity_affect:[1,1,1,0.8,1,1],
      change_affect:[1,1,1,1,1,1],
      trade_affect:[0.9,0.9,0.9,1.3,1],
      index:  10,
      image: '',
      description: 'Unusual things happen to your county, you suspect there is a witch in a village'
    },
    {
      name: 'risky business',
      quantity_affect:[1,1,1,1,1,1.6],
      change_affect:[1,1,1,1,1,1],
      trade_affect:[1.3,1.3,1.2,1.3,1.2],
      index: 3,
      image: '',
      description: 'you can make a good investment in a caravan in china. However, the risks are not as low as you would like them to be'
    },
    {
      name: 'Gone to Rome',
      quantity_affect:[1,1,1,1,1,1],
      change_affect:[1,1.5,1,1,1,0.9],
      trade_affect:[1,1,1,1,1],
      index: 18,
      image: '',
      description: 'faith is important in ones life. you have gone to seek the God in Rome'

    }, {
      name: 'Revenge over Neighbour',
      quantity_affect:[1,1,1,0.8,0.9,1],
      change_affect:[1,1,1,1,1,1.5],
      trade_affect:[0.9,0.9,0.9,1.3,1.2],
      index: 12,
      image: '',
      description: 'Revenge sweet Revenge. Time to get your riches back from Neighbour!'
    }, {
      name: 'Revenge over Neighbour',
      quantity_affect:[1,1,1,0.8,0.9,1],
      change_affect:[1,1,1,1,1,1.5],
      trade_affect:[0.9,0.9,0.9,1.3,1.2],
      index: 17,
      image: '',
      description: 'Revenge sweet Revenge. Time to get your riches back from Neighbour!'
    },
    {
      name: 'more peasants in village',
      quantity_affect:[1,1,1,0.8,0.9,1],
      change_affect:[1,1,1,1,1,1],
      trade_affect:[0.9,0.9,0.9,1.3,1.2],
      index: 4,
      image: '',
      description: 'You can hire villagers cheaper!!!'
    },
    {
      name: 'dying stock',
      quantity_affect:[1,0.8,0.8,1,1,1],
      change_affect:[1,1,1,1,1,1],
      trade_affect:[0.9,0.9,0.9,1.3,1.2],
      index: 5,
      image: '',
      description: 'The stock is dying!!! the prices for stock skyrocketed!!!'
    }, {
      name: 'Gift from King!!!',
      quantity_affect:[1,1,1,1,1,1.4],
      change_affect:[1,1,0.7,1,1,2],
      trade_affect:[1,1,1,1.3,1.2],
      index: 0,
      image: '',
      description: 'His majesty, The king has decided to gift you money'
    },
    {
      name: 'family matters',
      quantity_affect:[1,1,1,1,1,0.9],
      change_affect:[1,1,1,1,1,0.8],
      trade_affect:[1,1,1,1,1],
      index: 9,
      image: '',
      description: 'It is a tryuly majestic day!!! your sun has been born. but it will definitely affect your pocket'
    },
    {
      name: 'taxes',
      quantity_affect:[1,1,1,1,1,0.9],
      change_affect:[1,1,1.3,1,1,0.6],
      trade_affect:[0.9,0.9,0.9,1.3,1.2],
      index: 11,
      image: '',
      description: 'king expects you to pay your taxes. the amount will definitely affect your relation with him'

    },
    {
      name: 'great harvest',
      quantity_affect:[1,1,1,1,1,1],
      change_affect:[1.4,1,1,1,1,1],
      trade_affect:[0.9,1,1,1.3,1.2],
      index: 19,
      image: '',
      description: 'such a great harvest has not been seen in decades.'
    },
    {
      name: 'great harvest',
      quantity_affect:[1,1,1,1,1,1],
      change_affect:[1.4,1,1,1,1,1],
      trade_affect:[0.9,1,1,1.3,1.2],
      index: 16,
      image: '',
      description: 'such a great harvest has not been seen in decades.'

    },
    {
      name: 'group of mercenaries',
      quantity_affect:[1,1,1,0.8,0.9,1],
      change_affect:[1,1,1,1,1,1],
      trade_affect:[1,1,1,1,0.6],
      index: 13,
      image: '',
      description: 'group of cheap good mercenaries approach town.'

    }, {
      name: 'piligrimage',
      quantity_affect:[1,1,1,1,1,1],
      change_affect:[1,1,1,1,1,1],
      trade_affect:[0.9,0.9,0.9,1.3,1.2],
      index: 6,
      image: '',
      description: 'your peasants go to piligrimage. That is not good.'
    }
  ]
}
