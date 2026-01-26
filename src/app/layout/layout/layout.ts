import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Hero } from '../hero/hero';
import { Services } from '../services/services';
import { Gallery } from '../gallery/gallery';
import { About } from '../about/about';
import { MarqueeTestimonialsComponent } from '../marquee-testimonials.component/marquee-testimonials.component';
import { Team } from '../team/team';
import { CallToAction } from '../call-to-action/call-to-action';
// import { ImageMarqueeComponent } from '../image-marquee.component/image-marquee.component';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-layout',
  imports: [
    Header,
    Hero,
    Services,
    //Gallery,
    About,
    MarqueeTestimonialsComponent,
    //Team,
    CallToAction,
   // ImageMarqueeComponent,
    Footer,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
