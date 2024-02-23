import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  contentTitle: String = ""
  contentDescription: String = ""
}
