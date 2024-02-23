import { Component } from '@angular/core';
import { TitleMenuComponent } from "../../components/title-menu/title-menu.component";
import { PrincipalCardComponent } from "../../components/principal-card/principal-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [TitleMenuComponent, PrincipalCardComponent]
})
export class HomeComponent {

}
