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

  basis: IIngredient[] = [
    {
      id: 1,
      title: 'Basis 1',
      description: 'Most valuable component ever',
      price: 15.99,
      image: '../../../assets/images/rose.png'
    },
    {
      id: 2,
      title: 'Basis 2',
      description: 'Most valuable component ever',
      price: 15.99,
      image: '../../../assets/images/rose.png'

    },
    {
      id: 3,
      title: 'Basis 3',
      description: 'Most valuable component ever',
      price: 15.99,
      image: '../../../assets/images/rose.png'
    },
    {
      id: 4,
      title: 'Basis 4',
      description: 'Most valuable component ever',
      price: 15.99,
      image: '../../../assets/images/rose.png'
    },
    {
      id: 5,
      title: 'Basis 5',
      description: 'Most valuable component ever',
      price: 15.99,
      image: '../../../assets/images/rose.png'

    },
  ]


  dufte: IIngredient[] = [
    {
      id: 1,
      title: 'Duft 1',
      description: 'Most valuable component ever',
      price: 15.99,
      image: '../../../assets/images/rose.png'
    },
    {
      id: 2,
      title: 'Duft 2',
      description: 'Most valuable component ever',
      price: 15.99,
      image: '../../../assets/images/rose.png'

    },
    {
      id: 3,
      title: 'Duft 3',
      description: 'Most valuable component ever',
      price: 15.99,
      image: '../../../assets/images/rose.png'
    },
    {
      id: 4,
      title: 'Duft 4',
      description: 'Most valuable component ever',
      price: 15.99,
      image: '../../../assets/images/rose.png'
    },
    {
      id: 5,
      title: 'Duft 5',
      description: 'Most valuable component ever',
      price: 15.99,
      image: '../../../assets/images/rose.png'

    },
    {
      id: 6,
      title: 'Duft 6',
      description: 'Most valuable component ever',
      price: 15.99,
      image: '../../../assets/images/rose.png'
    }
  ]

  
  wirkstoffe: IIngredient[] = [
    {
      id: 1,
      title: 'wirkstoffe 1',
      description: 'Most valuable component ever',
      price: 15.99,
      image: '../../../assets/images/rose.png'
    },
    {
      id: 2,
      title: 'wirkstoffe 2',
      description: 'Most valuable component ever',
      price: 15.99,
      image: '../../../assets/images/rose.png'

    },
    {
      id: 3,
      title: 'wirkstoffe 3',
      description: 'Most valuable component ever',
      price: 15.99,
      image: '../../../assets/images/rose.png'
    },
    {
      id: 4,
      title: 'wirkstoffe 4',
      description: 'Most valuable component ever',
      price: 15.99,
      image: '../../../assets/images/rose.png'
    },
    {
      id: 5,
      title: 'wirkstoffe 5',
      description: 'Most valuable component ever',
      price: 15.99,
      image: '../../../assets/images/rose.png'

    },
    {
      id: 6,
      title: 'wirkstoffe 6',
      description: 'Most valuable component ever',
      price: 15.99,
      image: '../../../assets/images/rose.png'
    }
  ]

  categories = [
    {
      id: 1,
      label: "Basis",
      description: 'Lorem ipsum dolor sit amet, mei singulis atomorum cu, ut nihil ignota pertinax cum, viris fuisset urbanitas mei ex. Has saepe utamur reprimique et. Illud viderer et cum. Eu mazim numquam voluptatibus mei. Est nonumy volutpat et, usu enim periculis no, in esse meliore suscipiantur vel.',
      ingredients: this.basis
    },
    {
      id: 2,
      label: "Dufte",
      description: 'Lorem ipsum dolor sit amet, mei singulis atomorum cu, ut nihil ignota pertinax cum, viris fuisset urbanitas mei ex. Has saepe utamur reprimique et. Illud viderer et cum. Eu mazim numquam voluptatibus mei. Est nonumy volutpat et, usu enim periculis no, in esse meliore suscipiantur vel.',
      ingredients: this.dufte
    },
    {
      id: 3,
      label: "Wirkstoffe",
      description: 'Lorem ipsum dolor sit amet, mei singulis atomorum cu, ut nihil ignota pertinax cum, viris fuisset urbanitas mei ex. Has saepe utamur reprimique et. Illud viderer et cum. Eu mazim numquam voluptatibus mei. Est nonumy volutpat et, usu enim periculis no, in esse meliore suscipiantur vel.'  ,
      ingredients: this.wirkstoffe
    }
  ]


}
