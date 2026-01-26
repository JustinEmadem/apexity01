import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
