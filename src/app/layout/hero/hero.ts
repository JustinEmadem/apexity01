import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modal } from '../../components/modal/modal';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    Modal,
    CommonModule
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
