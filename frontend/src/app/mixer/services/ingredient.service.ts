import { Injectable } from '@angular/core';
import { IIngredient } from '../../models/IIngredient';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private allItems: IIngredient[] = [];

  private ingridients = new BehaviorSubject(this.allItems);

  public $ingridients = this.ingridients.asObservable();

  constructor() { }


  add(item: IIngredient) {
    this.allItems.push(item);
    this.update();
  }

  remove(item: IIngredient) {
    this.allItems = this.allItems.filter(i => i !== item);
    this.update();
  }

  private update() {
    this.ingridients.next(this.allItems);
  }
}
