import { Component, Input } from '@angular/core';
import { Prenotation } from '../Models/Prenotation.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-lista-prenotazioni',
  imports: [DatePipe],
  templateUrl: './lista-prenotazioni.component.html',
  styleUrl: './lista-prenotazioni.component.css'
})
export class ListaPrenotazioniComponent {
  @Input() prenotazione!: Prenotation
  date!: Date
}
