import { Component } from '@angular/core';

@Component({
  selector: 'header-bootstrap',
  imports: [],
  templateUrl: './c-header-bootstrap.html',
  styleUrl: './c-header-bootstrap.scss',
})
export class CHeaderBootstrap {

    numeroPedidos: number = 0;

/*
  ngOnInit() {
    this.PedidosService.totalPedidos$.subscribe(total => {
      this.numeroPedidos = total
    })
  }
  constructor(private tareaService: TareaService) { }
  */

}
