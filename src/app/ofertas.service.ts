import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { Oferta } from './shared/oferta.model'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class OfertasService {

  private SERVICE_URI: string = 'http://localhost:3000'

  constructor(private http: Http) { }

  //Busca todas as ofertas em destaque
  public getOfertas(): Promise<Oferta[]> {
    return this.http.get(this.SERVICE_URI + '/ofertas?destaque=true')
      .toPromise()
      .then((response: any) => response.json())
  }

  //Busca ofertas por categoria
  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    // return this.http.get(`http://local:3000/ofertas?categoria=${categoria}`)
    return this.http.get(this.SERVICE_URI + '/ofertas?categoria=' + categoria)
      .toPromise()
      .then((response: any) => response.json())
  }

  //Busca oferta por id
  public getOfertasPorId(id: number): Promise<Oferta> {
    // return this.http.get(`http://local:3000/ofertas/${id}`)
    return this.http.get(this.SERVICE_URI + '/ofertas/' + id)
      .toPromise()
      .then((response: any) => response.json())
  }

  //Busca dados de como-usar
  public getComoUsarOfertaPorId(id: number): Promise<string> {
    return this.http.get(this.SERVICE_URI + '/como-usar?id=' + id)
      .toPromise()
      .then((response: any) => response.json()[0].descricao)
  }

  //Busca dados de onde-fica
  public getOndeFicaPorId(id: number): Promise<string> {
    return this.http.get(this.SERVICE_URI + '/onde-fica?id=' + id)
      .toPromise()
      .then((response: any) => response.json()[0].descricao)
  }
}
