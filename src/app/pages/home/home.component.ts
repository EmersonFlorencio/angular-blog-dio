import { Component } from '@angular/core';
import { TitleMenuComponent } from "../../components/title-menu/title-menu.component";
import { PrincipalCardComponent } from "../../components/principal-card/principal-card.component";
import { OtherCardsComponent } from "../../components/other-cards/other-cards.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [TitleMenuComponent, PrincipalCardComponent, OtherCardsComponent]
})
export class HomeComponent {

}
