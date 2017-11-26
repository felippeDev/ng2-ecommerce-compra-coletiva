import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from '../../ofertas.service'

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string = ''

  constructor(
    private routes: ActivatedRoute,
    private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getComoUsarOfertaPorId(this.routes.parent.snapshot.params['id'])
    .then((response:string) => this.comoUsar = response)
  }
}
