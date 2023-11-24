import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { type Product } from './product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.sass'
})
export class ProductComponent {

  links: Product[] = [
    {
      title: 'Body Building',
      image: 'assets/sports/bodybuilding/bodybuilding.jpg',
      description: '',
      anchor: '#'
    },
    {
      title: 'Crossfit',
      image: 'assets/sports/crossfit/cross.jpg',
      description: 'Lorem, ipsum dolor sit amet. 1',
      anchor: '#'
    },
    {
      title: 'Gym',
      image: 'assets/sports/gym/gym1.jpg',
      description: 'Lorem, ipsum dolor sit amet',
      anchor: '#'
    },
    {
      title: 'Meditation',
      image: 'assets/sports/meditation/meditation.jpg',
      description: 'Lorem, ipsum dolor sit amet',
      anchor: '#'
    },
    {
      title: 'Pilates',
      image: 'assets/sports/pilates/pilates.jpg',
      description: 'Lorem, ipsum dolor sit amet',
      anchor: '#'
    },
    {
      title: 'Yoga',
      image: 'assets/sports/yoga/yoga.jpg',
      description: 'Lorem, ipsum dolor sit amet',
      anchor: '#'
    },
    {
      title: 'Woman-fitness',
      image: 'assets/sports/woman/woman.jpg',
      description: 'Lorem, ipsum dolor sit amet',
      anchor: '#'
    }
  ];

}
