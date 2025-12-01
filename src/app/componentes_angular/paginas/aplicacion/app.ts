import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CHeader } from "../../ui/c-header/c-header";
import { CFooter } from '../../ui/c-footer/c-footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CHeader, CFooter],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('tienda-adm-front');
}
