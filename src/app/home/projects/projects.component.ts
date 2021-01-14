import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper/bundle';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var mySwiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      coverflowEffect:{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      grabCursor: false,
      centeredSlides: true,
      slidesPerView: 'auto',
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev',
      },
    })
  
  }
}
