import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  show = null;

  data_json = [
    {
      'title': 'Home pizza',
      'ingredients': [
        'Flour - 150 g',
        'Dry yeast - 3 g',
        'Water - 80 ml',
        'Sunflower or olive oil - 1 tbsp. a spoon',
        'Sugar - 0.5 tsp'
      ]
    },
    {
      'title': 'Pizza 4 seasons',
      'ingredients': [
        'champignons',
        'bacon',
        'sea cocktail',
        'tomatoes',
        'mozzarella',
        'tomato sauce'
      ]
    },
    {
      'title': 'Pizza Tropicano',
      'ingredients': [
        'mozzarella',
        'pineapple',
        'chicken',
        'origano',
        'tomato sauce'
      ]
    },
    {
      'title': 'Pizza European',
      'ingredients': [
        'hunting sausages',
        'mozzarella',
        'pineapple',
        'chicken fillet',
        'champignons',
        'tomato sauce',
        'ham'
      ]
    }
  ];

  constructor() {

  }

  ngOnInit() {
  }

  Accordion(idx) {
    if (this.isShown(idx)) {
      this.show = null;
    } else {
      this.show = idx;
    }
  }

  isShown(idx) {
    return this.show === idx;
  }

}
