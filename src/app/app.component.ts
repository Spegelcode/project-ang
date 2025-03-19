import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Lektion1Component } from "./lektion1/lektion1.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Lektion1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-ang';
}
