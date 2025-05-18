export class Prenotation{
    nome: string
    cognome: string
    indirizzo:string
    telefono: number
    mail: string
    data: Date
    ora: number

    constructor(nome: string, cognome:string, indirizzo:string, telefono: number, mail: string, data: Date, ora: number){
        this.nome = nome
        this.cognome = cognome
        this.indirizzo = indirizzo
        this.telefono = telefono
        this.mail = mail
        this.data = data
        this.ora = ora
    }
}