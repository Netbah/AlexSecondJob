import { Component, OnInit } from '@angular/core';
import { IIngredient } from '../../models/IIngredient';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  categories = [
    {
      id: 1,
      label: "Category 1",
      description: 'Lorem ipsum dolor sit amet, mei singulis atomorum cu, ut nihil ignota pertinax cum, viris fuisset urbanitas mei ex. Has saepe utamur reprimique et. Illud viderer et cum. Eu mazim numquam voluptatibus mei. Est nonumy volutpat et, usu enim periculis no, in esse meliore suscipiantur vel.'
    },
    {
      id: 2,
      label: "Category 2",
      description: 'Lorem ipsum dolor sit amet, mei singulis atomorum cu, ut nihil ignota pertinax cum, viris fuisset urbanitas mei ex. Has saepe utamur reprimique et. Illud viderer et cum. Eu mazim numquam voluptatibus mei. Est nonumy volutpat et, usu enim periculis no, in esse meliore suscipiantur vel.'
    },
    {
      id: 3,
      label: "Category 3",
      description: 'Lorem ipsum dolor sit amet, mei singulis atomorum cu, ut nihil ignota pertinax cum, viris fuisset urbanitas mei ex. Has saepe utamur reprimique et. Illud viderer et cum. Eu mazim numquam voluptatibus mei. Est nonumy volutpat et, usu enim periculis no, in esse meliore suscipiantur vel.'
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
    },
    {
      id: 4,
      title: 'Schoko moko',
      description: 'Most valuable component ever',
      price: 15.99,
      image: '../../../assets/images/rose.png'
    },
    {
      id: 5,
      title: 'Schoko moko 12312',
      description: 'Most valuable component ever',
      price: 15.99,
      image: '../../../assets/images/rose.png'

    },
    {
      id: 6,
      title: 'Schoko moko 123 13123 123',
      description: 'Most valuable component ever',
      price: 15.99,
      image: '../../../assets/images/rose.png'
    }
  ]

}
