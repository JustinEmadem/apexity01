import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TestimonialCard {
  image: string;
  name: string;
  handle: string;
  date: string;
}

@Component({
  selector: 'app-marquee-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marquee-testimonials.component.html',
  styleUrls: ['./marquee-testimonials.component.css']
})
export class MarqueeTestimonialsComponent {
  cardsData: TestimonialCard[] = [
  {
    image: '',
    name: 'Sean Paolo',
    handle: '@seanirl',
    date: 'April 20, 2025'
  },
  {
    image: '',
    name: 'Kyla Mendoza',
    handle: '@kyla.jpg',
    date: 'May 10, 2025'
  },
  {
    image: '',
    name: 'Marco Luis',
    handle: '@marcothinks',
    date: 'June 5, 2025'
  },
  {
    image: '',
    name: 'Trisha Ann Flores',
    handle: '@trishannnn',
    date: 'May 10, 2025'
  }
  ];
  get doubledCards(): TestimonialCard[] {
    return [...this.cardsData, ...this.cardsData];
  }
}
