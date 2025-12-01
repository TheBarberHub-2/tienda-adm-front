import { Component } from '@angular/core';
import { TareaService } from '../../../services/tareas.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-c-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './c-header.html',
  styleUrls: ['./c-header.scss']
})

export class CHeader {
  numeroTareas: number = 0;
//
/*
  ngOnInit() {
    this.tareaService.totalTareas$.subscribe(total => {
      this.numeroTareas = total
    })
  }
*/
  constructor(private tareaService: TareaService) { }
}
