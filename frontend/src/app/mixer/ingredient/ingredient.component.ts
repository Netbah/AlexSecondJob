import { Component, OnInit, Input } from '@angular/core';
import { IIngredient } from '../../models/IIngredient'
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {
  @Input() item: IIngredient;

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
  }

  addToOrder() {
    this.ingredientService.add(this.item);
  }



}
