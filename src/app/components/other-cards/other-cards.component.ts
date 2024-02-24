import { NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-other-cards',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './other-cards.component.html',
  styleUrl: './other-cards.component.css'
})
export class OtherCardsComponent implements OnInit {
  @Input()
  otherTitles: String = ""
  @Input()
  id: String | null = "0"
  @Input()
  photo: String = ""

  constructor() { }

  ngOnInit(): void {
    this.photo = "https://picsum.photos/id/1060/536/354?blur=2"
  }


}
