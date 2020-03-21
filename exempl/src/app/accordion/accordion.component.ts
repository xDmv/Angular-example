import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  
  expo: string = "Expo text string";
  
  header_code = {
    header: `
      import { Component, OnInit } from '@angular/core';

      @Component({
        selector: 'app-accordion',
        templateUrl: './accordion.component.html',
        styleUrls: ['./accordion.component.scss']
      })
      export class AccordionComponent implements OnInit {
    `
  };
  footer_code = {
    footer: `
        constructor() {}
        
        ngOnInit() {}
        
        Accordion(idx) {
          if (this.isShown(idx)) {
            this.show = null;
          } else {
            this.show = idx;
          }  
        } 
        
        isShown(idx) { return this.show === idx; }

    `
  };
  htmlcode =
    {
      code:
        `
        <mat-card class='card' *ngFor='let itm of data_json; let i = index;'>
          <p class='card-title' (click)='Accordion('idx'+i)'>
            {{ itm.title }}
          </p>    
          <div class='card-text' *ngIf='isShown('idx'+i)'>
            <ol>
              <li *ngFor='let itmx of itm.ingredients;'>
                {{ itmx }}
              </li>
            </ol>
          </div>
        </mat-card>
        
        `
    };
  Csscode = {
    code: `
        .cards {
          margin: 5% 35% 0px 35%;
          .card {
            margin-top: 50px;
          }
          .card-title {
            font-family: 'Times New Roman', Times, serif;
            font-size: 21px;
            color: #c2c2c2;
            text-align: center;
            .card-text { 
              font-family: 'Times New Roman', Times, serif;
              font-size: 16px;
              color: #0ee0e7dc;
              text-align: left;
            }
          }
        }

      `
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
    let x: number = 0;
    if (this.isShown(idx)) {
      this.show = null;
    } else {
      this.show = idx;
    }
  }

  isShown(idx) {
    return this.show === idx;
  }

  experiment(...arg) { 
    let expo = "hdjfhjdhf";
    expo = expo + this.expo;
    console.log(`expo: ${expo}`);
    console.log(`expo: ${arg[2]}`);
  }
}
