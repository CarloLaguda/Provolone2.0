import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Prenotation } from './Models/Prenotation.model';
import { DatePipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prenotazioni-Laguda';
  vett_prenotazioni: Prenotation[] = []
}
