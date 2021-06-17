import { Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ICarouselItem } from '../iCarousel-item.metadata';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  providers: [NgbCarouselConfig]
})
export class BannerComponent implements OnInit {
  
  @Input() height = 500;
  @Input() isFullScreen = false;
  @Input() items : ICarouselItem[] = [];
  
  public finalHeight : string | number = 0;
  
  
  showNavigationArrows = false;
  showNavigationIndicators = false;

  images = ['wine','aceituna'].map((name)=>
    `assets/${name}banner.jpg`);
  constructor(config: NgbCarouselConfig) {
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`;

   
    
    
   }
  
  ngOnInit(): void {
    
  }

}
