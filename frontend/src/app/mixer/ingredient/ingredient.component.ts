import { Component, OnInit, Input } from '@angular/core';
import { IIngredient } from '../../models/IIngredient'

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {
  @Input() item: IIngredient;

  constructor() { }

  ngOnInit() {
  }

}
