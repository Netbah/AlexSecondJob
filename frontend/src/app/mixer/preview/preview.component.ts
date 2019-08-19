import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../services/ingredient.service';
import { IIngredient } from '../../models/IIngredient';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  ingredients: IIngredient[]

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
    this.ingredientService.$ingridients.subscribe((items: IIngredient[]) => {
      this.ingredients = items;
    })
  }

  delete(item) {
    this.ingredientService.remove(item);
  }

}
