import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from '../../ofertas.service'

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string = ''

  constructor(
    private routes: ActivatedRoute,
    private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOndeFicaPorId(this.routes.parent.snapshot.params['id'])
      .then((response: string) => this.ondeFica = response)
  }

}
