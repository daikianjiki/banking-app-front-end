import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  socialIcons: String[] = [
    'bi bi-facebook', // facebook
    'bi bi-instagram' , // instagram
    'bi bi-linkedin', // linkedin
    'bi bi-twitter', // twitter
  ];

}
