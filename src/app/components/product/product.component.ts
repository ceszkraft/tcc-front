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
      image: 'assets/sports/crossfit/crossfit.jpg',
      description: 'Lorem, ipsum dolor sit amet. 1',
      anchor: '#'
    },
    {
      title: 'Gym logo',
      image: 'assets/sports/gym/gym.jpg',
      description: 'Lorem, ipsum dolor sit amet',
      anchor: '#'
    },
    {
      title: 'Meditation logo',
      image: 'assets/sports/meditation/meditation.jpg',
      description: 'Lorem, ipsum dolor sit amet',
      anchor: '#'
    },
    {
      title: 'Pilates logo',
      image: 'assets/sports/pilates/pilates.jpg',
      description: 'Lorem, ipsum dolor sit amet',
      anchor: '#'
    },
    {
      title: 'Woman-fitness logo',
      image: 'assets/sports/woman-fitness/woman-fitness.jpg',
      description: 'Lorem, ipsum dolor sit amet',
      anchor: '#'
    },
    {
      title: 'Yoga logo',
      image: 'assets/sports/yoga/yoga.jpg',
      description: 'Lorem, ipsum dolor sit amet',
      anchor: '#'
    }
  ];

}
