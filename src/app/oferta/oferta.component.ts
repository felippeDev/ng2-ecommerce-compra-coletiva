import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model'

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService) { }

  ngOnInit() {
    console.log('[Snapshot] Parametro da rota: ' + this.route.snapshot.params['id'])

    // this.route.params.subscribe((parametro: any) => {
    //   console.log('[Subscribe] Parametro da rota: ' + parametro.id)
    // })

    this.ofertasService.getOfertasPorId(this.route.snapshot.params['id'])
      .then((response: Oferta) => {
        this.oferta = response
      })
      .catch((reason: any) => {
        console.log('Erro: Não foi possível buscar a oferta por id')
        console.log(reason)
      })
  }

}
