import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.sass'
})
export class ProductComponent {

  links = [
    {
    bodyBuilding: {
      bodyBuildingImg: 'assets/sports/bodybuilding/bodybuilding.jpg',
      bodyBuildingAnchor: '#',
      bodyBuildingTitle: 'Body Building'
    },
    crossfit: {
      crossfitImg: 'assets/sports/crossfit/crossfit.jpg',
      crossfitAnchor: '#',
      crossfitTitle: 'Crossfit'
    },
    gym: {
      gymImg: 'assets/sports/gym/gym.jpg',
      gymAnchor: '#',
      gymTitle: 'Gym logo'
    },
    meditation: {
      meditationImg: 'assets/sports/meditation/meditation.jpg',
      meditationAnchor: '#',
      meditationTitle: 'Meditation logo'
    },
    pilates: {
      pilatesImg: 'assets/sports/pilates/pilates.jpg',
      pilatesAnchor: '#',
      pilatesTitle: 'Pilates logo'
    },
    womanFitness: {
      womanFitnessImg: 'assets/sports/woman-fitness/woman-fitness.jpg',
      womanFitnessAnchor: '#',
      womanFitnessTitle: 'Woman-fitness logo'
    },
    yoga: {
      yogaImg: 'assets/sports/yoga/yoga.jpg',
      yogaAnchor: '#',
      yogaTitle: 'Yoga logo'
    },
  }
];

}
