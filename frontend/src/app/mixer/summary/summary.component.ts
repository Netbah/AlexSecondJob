import { Component, OnInit } from '@angular/core';
import { IIngredient } from '../../models/IIngredient';
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  price: number;

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
    this.ingredientService.$ingridients.subscribe((items: IIngredient[]) => {
      const array = items.map(i => i.price);
      this.price = array.reduce((total, num) => {
        return total + num;
      }, 0)
    })
  }

}
