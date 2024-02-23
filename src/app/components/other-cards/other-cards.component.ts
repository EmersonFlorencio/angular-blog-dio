import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-other-cards',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './other-cards.component.html',
  styleUrl: './other-cards.component.css'
})
export class OtherCardsComponent {
  @Input()
  otherTitles: String = ""
}
