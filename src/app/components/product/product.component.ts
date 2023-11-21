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
      bodyBuildingTitle: 'Body Building',
      bodyBuildingDescription: 'Lorem, ipsum dolor sit amet'
    },
    crossfit: {
      crossfitImg: 'assets/sports/crossfit/crossfit.jpg',
      crossfitAnchor: '#',
      crossfitTitle: 'Crossfit',
      crossfitDescription: 'Lorem, ipsum dolor sit amet. 1'

    },
    gym: {
      gymImg: 'assets/sports/gym/gym.jpg',
      gymAnchor: '#',
      gymTitle: 'Gym logo',
      gymDescription: 'Lorem, ipsum dolor sit amet.'

    },
    meditation: {
      meditationImg: 'assets/sports/meditation/meditation.jpg',
      meditationAnchor: '#',
      meditationTitle: 'Meditation logo',
      meditationDescription: 'Lorem, ipsum dolor sit amet.'

    },
    pilates: {
      pilatesImg: 'assets/sports/pilates/pilates.jpg',
      pilatesAnchor: '#',
      pilatesTitle: 'Pilates logo',
      pilatesDescription: 'Lorem, ipsum dolor sit amet.'

    },
    womanFitness: {
      womanFitnessImg: 'assets/sports/woman-fitness/woman-fitness.jpg',
      womanFitnessAnchor: '#',
      womanFitnessTitle: 'Woman-fitness logo',
      womanDescription: 'Lorem, ipsum dolor sit amet.'

    },
    yoga: {
      yogaImg: 'assets/sports/yoga/yoga.jpg',
      yogaAnchor: '#',
      yogaTitle: 'Yoga logo',
      yogaDescription: 'Lorem, ipsum dolor sit amet.'

    },
  }
];

}
