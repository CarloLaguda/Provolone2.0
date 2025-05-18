import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Prenotation } from './Models/Prenotation.model';
import { DatePipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'prenotazioni-Laguda';

  vett_prenotazioni: Prenotation[] = []
  obs_vet!: Observable<Prenotation[]>

  http: HttpClient

  constructor(http: HttpClient){this.http = http}

  loading!:boolean

  makeGet()
  {
    this.loading = false
    this.obs_vet = this.http.get<Prenotation[]>("https://my-json-server.typicode.com/malizia-g/verificaPrenotazioni/prenotazioni")
    this.obs_vet.subscribe(this.getData)
  }
  getData = (d: Prenotation[]) =>
  {
    this.vett_prenotazioni = d
    this.loading = false
  }
  ngOnInit() 
  {
    this.makeGet()
  }
}
