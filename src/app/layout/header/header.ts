import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modal } from '../../components/modal/modal';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    Modal,
    CommonModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMobileMenuOpen = false;

  navLinks: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    // { label: 'The Team', href: '#' },
    { label: 'Contact', href: '#contact' }
  ];

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
