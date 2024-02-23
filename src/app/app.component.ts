import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMenuComponent } from "./components/nav-menu/nav-menu.component";
import { TitleMenuComponent } from "./components/title-menu/title-menu.component"

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, NavMenuComponent, TitleMenuComponent]
})
export class AppComponent {
  title = 'angular-blog-dio';
}
