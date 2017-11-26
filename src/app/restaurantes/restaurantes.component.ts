import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model'
import { OfertasService } from '../ofertas.service'

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {

  public ofertas: Oferta[]  

  constructor(private OfertasService: OfertasService) { }

  ngOnInit() {
    this.OfertasService.getOfertasPorCategoria('restaurante')
      .then((response: Oferta[]) => {
        this.ofertas = response
      })
      .catch((reason: any) => {
        console.log('Erro: Não foi possível buscar ofertas do tipo restaurante')
        console.log(reason)
      })
  }
}
