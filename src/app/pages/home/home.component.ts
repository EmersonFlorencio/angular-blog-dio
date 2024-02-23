import { Component } from '@angular/core';
import { TitleMenuComponent } from "../../components/title-menu/title-menu.component";
import { PrincipalCardComponent } from "../../components/principal-card/principal-card.component";
import { OtherCardsComponent } from "../../components/other-cards/other-cards.component";
import { NavMenuComponent } from "../../components/nav-menu/nav-menu.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [TitleMenuComponent, PrincipalCardComponent, OtherCardsComponent, NavMenuComponent]
})
export class HomeComponent {

}
