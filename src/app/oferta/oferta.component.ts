import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model'
import { Observable } from 'rxjs/Observable'
import { Observer } from 'rxjs/Observer'
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/Rx'

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  private tempoObservableSubscription: Subscription
  private meuObservableSubscription: Subscription
  
  public oferta: Oferta

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertasPorId(this.route.snapshot.params['id'])
      .then((response: Oferta) => {
        this.oferta = response
      })
      .catch((reason: any) => {
        console.log('Erro: Não foi possível buscar a oferta por id')
        console.log(reason)
      })

    // this.route.params.subscribe((parametro: any) => {
    //   console.log('[Subscribe] Parametro da rota: ' + parametro.id)
    // })

    let tempo = Observable.interval(500)

    this.tempoObservableSubscription = tempo.subscribe((intervalo: number) => {
      console.log(intervalo);
    })

    //observable
    let meuObservableTeste = Observable.create((observer: Observer<string>) => {
      observer.next('Evento 1')
      observer.next('Evento 2')
      // observer.error('Error!')
      observer.complete()
    })

    //observer
    this.meuObservableSubscription = meuObservableTeste.subscribe(
      (resultado: string) => console.log(resultado),
      (erro: string) => console.log(erro),
      () => console.log('Completado!')
    )
  }

  ngOnDestroy() {
    this.tempoObservableSubscription.unsubscribe()
    this.meuObservableSubscription.unsubscribe()
  }
}
