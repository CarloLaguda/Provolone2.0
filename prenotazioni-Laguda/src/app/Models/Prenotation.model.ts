export class Prenotation{
    nome: string
    cognome: string
    indirizzo:string
    telefono: number
    mail: string
    data: Date
    ora: string

    constructor(nome: string, cognome:string, indirizzo:string, telefono: number, mail: string, data: Date, ora: string){
        this.nome = nome
        this.cognome = cognome
        this.indirizzo = indirizzo
        this.telefono = telefono
        this.mail = mail
        this.data = data
        this.ora = ora
    }
}

export interface Response{
    id: number
}