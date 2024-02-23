import { Component } from '@angular/core';
import { TitleMenuComponent } from "../../components/title-menu/title-menu.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [TitleMenuComponent]
})
export class HomeComponent {

}
