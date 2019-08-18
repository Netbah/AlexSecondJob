import { Component, OnInit } from '@angular/core';
import { IIngredient } from '../../models/IIngredient';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  categories = [
    {
      id: 1,
      label: "Category 1",
      description: 'Select something here'
    },
    {
      id: 2,
      label: "Category 2",
      description: 'Select something here'
    },
    {
      id: 3,
      label: "Category 3",
      description: 'Select something here'
    }
  ]

  ingredients: IIngredient[] = [
    {
      id: 1,
      title: 'Schoko moko',
      description: 'Most valuable component ever',
      price: 15.99,
      image: '../../../assets/images/rose.png'
    },
    {
      id: 2,
      title: 'Schoko moko 12312',
      description: 'Most valuable component ever',
      price: 15.99,
      image: '../../../assets/images/rose.png'

    },
    {
      id: 3,
      title: 'Schoko moko 123 13123 123',
      description: 'Most valuable component ever',
      price: 15.99,
      image: '../../../assets/images/rose.png'
    }
  ]

}
