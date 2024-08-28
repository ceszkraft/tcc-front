import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.sass'
})
export class AboutUsComponent {

  title: string = 'Lorem ipsum dolor sit amet.';
  text_0: string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium   voluptas perspiciatis quasi obcaecati dicta doloribus reprehenderit   molestiae sed modi eveniet eum consequatur, amet quibusdam dignissimos   provident non sequi quisquam. Quo, pariatur! Dignissimos, error corporis   numquam cupiditate doloremque quis sit aut tenetur nesciunt inventore. Eos   dicta praesentium ut itaque culpa blanditiis.';
  text_1: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam rem delectus, itaque voluptate architecto eaque quos vero neque ad exercitationem quisquam qui nihil odio at laboriosam aperiam maiores  dolores animi assumenda blanditiis aliquid quis ex sed illo. Quo labore  suscipit quidem, unde vitae provident. Aperiam delectus ipsum consequatur  odio ';
  imgPath: string = 'assets/about-us/about-us-0.jpg';
  imgAlt: string = 'about us';

}
