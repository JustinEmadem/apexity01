import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Header } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';

@Component({
  selector: 'app-terms-policies',
  standalone: true,
  imports: [Header, Footer],
  templateUrl: './terms-policies.html',
  styleUrl: './terms-policies.css',
})
export class TermsPolicies {

}
