import { Component } from '@angular/core';
import { CardService } from './services/card.service';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private cardService: CardService) {

  }

  getAllCardItems() {
    this.cardService.getAllCardItems().subscribe(
      pipe((res) => { 
        console.log(res);
      })
    )
  }

  addCardItem(){
    this.cardService.addItemToCard().subscribe(
      pipe((res) => { 
        console.log(res);
      })
    )
  }

  deleteCardItem(){
    this.cardService.deleteItemFromCard().subscribe(
      pipe((res) => { 
        console.log(res);
      })
    )
  }

  updateCardItem(){
    this.cardService.updateItemFromCard().subscribe(
      pipe((res) => { 
        console.log(res);
      })
    )
  }



}
