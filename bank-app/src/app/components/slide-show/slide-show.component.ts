import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: [ './slide-show.component.css' ]
})
export class SlideShowComponent  {

  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);

    constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

}
