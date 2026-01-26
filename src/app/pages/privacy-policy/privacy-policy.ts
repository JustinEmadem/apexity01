import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Header } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [Header, Footer],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.css',
})
export class PrivacyPolicy {

}
