import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';

interface FAQ {
  question: string;
  answer: string;
  isOpen?: boolean;
}


@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [Header, Footer, CommonModule],
  templateUrl: './faqs.html',
  styleUrl: './faqs.css',
})
export class Faqs {
  faqsData: FAQ[] = [
    {
      question: 'Lightning-Fast Performance',
      answer: 'Built with speed — minimal load times and optimized rendering.',
      isOpen: false
    },
    {
      question: 'Fully Customizable Components',
      answer: 'Easily adjust styles, structure, and behavior to match your project needs.',
      isOpen: false
    },
    {
      question: 'Responsive by Default',
      answer: 'Every component is responsive by default — no extra CSS required.',
      isOpen: false
    },
    {
      question: 'Tailwind CSS Powered',
      answer: 'Built using Tailwind utility classes — no extra CSS or frameworks required.',
      isOpen: false
    },
    {
      question: 'Dark Mode Support',
      answer: 'All components come ready with light and dark theme support out of the box.',
      isOpen: false
    }
  ];

  toggleFAQ(index: number): void {
    // Close all other FAQs
    this.faqsData.forEach((faq, i) => {
      if (i !== index) {
        faq.isOpen = false;
      }
    });

    // Toggle the clicked FAQ
    this.faqsData[index].isOpen = !this.faqsData[index].isOpen;
  }

  trackByIndex(index: number): number {
    return index;
  }
}
