import { Component } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';

@Component({
  selector: 'panel',
  imports: [],
  templateUrl: './panel.html',
  styleUrl: './panel.scss',
})
export class Panel {
  titulo!: String;
  numero$: Observable<number> = EMPTY;

}
