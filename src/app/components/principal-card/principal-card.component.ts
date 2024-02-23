import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-principal-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './principal-card.component.html',
  styleUrl: './principal-card.component.css'
})
export class PrincipalCardComponent {

}
