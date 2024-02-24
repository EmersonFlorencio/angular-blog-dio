import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-principal-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './principal-card.component.html',
  styleUrl: './principal-card.component.css'
})
export class PrincipalCardComponent {
  @Input()
  cardTitle: String = ""
  @Input()
  cardDescription: String = ""
  @Input()
  id: String = "0"
}
