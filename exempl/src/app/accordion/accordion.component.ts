import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  header_code = {
    header: "\nimport { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'app-accordion',\n  templateUrl: './accordion.component.html',\n  styleUrls: ['./accordion.component.scss']\n})\nexport class AccordionComponent implements OnInit {\n"
  };
  footer_code = {
    footer: "\n  constructor() {\n}\n\n  ngOnInit() {\n }\n\n  Accordion(idx) {\n    if (this.isShown(idx)) {\n      this.show = null;\n    } else {\n    this.show = idx;\n    }\n  }\n  isShown(idx) {\n    return this.show === idx;\n  }\n\n}"
  };
  htmlcode =
    {
      code: "\n<mat-card class='card' *ngFor='let itm of data_json; let i = index;'>\n    <p class='card-title' (click)='Accordion('idx'+i)'>\n        {{ itm.title }}\n    </p>\n    <div class='card-text' *ngIf='isShown('idx'+i)'>\n        <ol>\n            <li *ngFor='let itmx of itm.ingredients;'>\n                {{ itmx }}\n            </li>\n        </ol>\n    </div>\n</mat-card>"
    };
  Csscode = {
    code: "\n.cards {\n    margin: 5% 35% 0px 35%;\n    .card {\n        margin-top: 50px;\n    }\n    .card-title {\n        font-family: 'Times New Roman', Times, serif;\n        font-size: 21px;\n        color: #c2c2c2;\n        text-align: center;\n    }\n    .card-text {\n        font-family: 'Times New Roman', Times, serif;\n        font-size: 16px;\n        color: #0ee0e7dc;\n        text-align: left;\n    }\n}"
  };
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
