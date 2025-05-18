import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Prenotation, Response } from './Models/Prenotation.model';
import { DatePipe, CommonModule, JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListaPrenotazioniComponent } from './lista-prenotazioni/lista-prenotazioni.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, DatePipe, ListaPrenotazioniComponent, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'prenotazioni-Laguda';

  vett_prenotazioni: Prenotation[] = []
  obs_vet!: Observable<Prenotation[]>

  nuova_prenotazione!: Prenotation
  obs_resp!: Observable<Response>
  dati_post!: Object
  data!: Object
  http: HttpClient

  constructor(http: HttpClient){this.http = http}

  loading!:boolean

  makeGet()
  {
    this.loading = true
    this.obs_vet = this.http.get<Prenotation[]>("https://my-json-server.typicode.com/malizia-g/verificaPrenotazioni/prenotazioni")
    this.obs_vet.subscribe(this.getData)
  }
  getData = (d: Prenotation[]) =>
  {
    this.vett_prenotazioni = d
    this.loading = false
  }

  fai_Prenotazione(nome: HTMLInputElement, cognome: HTMLInputElement, indirizzo: HTMLInputElement, telefono: HTMLInputElement, mail: HTMLInputElement, data: HTMLInputElement, ora: HTMLInputElement)
  {
    console.log(Number(ora.value))
    this.loading = true
    const newdata = new Date(data.value)
    this.dati_post = JSON.stringify({
      nome: nome.value,
      cognome: cognome.value,
      indirizzo: indirizzo.value,
      telefono: Number(telefono.value),
      mail: mail.value,
      data: newdata,
      ora: Number(ora.value)
    })
    this.obs_resp = this.http.post<Response>("https://my-json-server.typicode.com/malizia-g/verificaPrenotazioni/prenotazioni", this.dati_post)
    this.obs_resp.subscribe(this.postData)
    this.nuova_prenotazione = new Prenotation(nome.value, cognome.value, indirizzo.value, Number(telefono.value), mail.value, newdata,  ora.value)
    console.log(this.nuova_prenotazione)
  }

  postData = (d: Response) =>
  {
    console.log(this.data)
    if(d.id >0){
      this.vett_prenotazioni.push(this.nuova_prenotazione)
    }
    this.loading = false

  }
  ngOnInit() 
  {
    this.makeGet()
  }
}
