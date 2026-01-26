import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CardData {
  title: string;
  image: string;
}

@Component({
  selector: 'app-image-marquee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-marquee.component.html',
  styleUrls: ['./image-marquee.component.css']
})
export class ImageMarqueeComponent {
  stopScroll = false;

  cardData: CardData[] = [
    {
      title: "Unlock Your Creative Flow",
      image: "https://images.unsplash.com/photo-1543487945-139a97f387d5?w=1200&auto=format&fit=crop&q=60",
    },
    {
      title: "Design Your Digital Future",
      image: "https://images.unsplash.com/photo-1529254479751-faeedc59e78f?w=1200&auto=format&fit=crop&q=60",
    },
    {
      title: "Build with Passion, Ship with Pride",
      image: "https://images.unsplash.com/photo-1618327907215-4e514efabd41?w=1200&auto=format&fit=crop&q=60",
    },
    {
      title: "Think Big, Code Smart",
      image: "https://images.unsplash.com/photo-1583407723467-9b2d22504831?w=1200&auto=format&fit=crop&q=60",
    },
  ];

  // Double the cards for seamless looping
  get doubledCards(): CardData[] {
    return [...this.cardData, ...this.cardData];
  }

  // Calculate animation duration based on number of cards
  get animationDuration(): string {
    return `${this.cardData.length * 2500}ms`;
  }

  onMouseEnter(): void {
    this.stopScroll = true;
  }

  onMouseLeave(): void {
    this.stopScroll = false;
  }

  // TrackBy function for better performance
  trackByIndex(index: number): number {
    return index;
  }
}
