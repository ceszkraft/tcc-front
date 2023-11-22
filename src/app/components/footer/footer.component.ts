import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass'
})
export class FooterComponent {

  blank = '_blank';
  links = [
      {
      instagram: {
        instagramImg: 'assets/footer/instagram.svg',
        instagramAnchor: 'https://www.instagram.com/',
        instagramAlt: 'Instagram logo'
      },
      facebook: {
        facebookImg: 'assets/footer/facebook.svg',
        facebookAnchor: 'https://www.facebook.com',
        facebookAlt: 'Facebook logo'
      },
      twitter: {
        twitterImg: 'assets/footer/twiitter-or-x.svg',
        twitterAnchor: 'https://twitter.com',
        twitterAlt: 'Twitter logo'
      },
      whatsapp: {
        whatsappImg: 'assets/footer/whatsapp.svg',
        whatsappAnchor: 'https://api.whatsapp.com/send?phone=5581996517881&text=Tenho%20interesse%20em%20saber%20mais%20sobre%20seu%20atendimento.',
        whatsappAlt: 'Whatsapp logo'
      }
    }
  ];


}
