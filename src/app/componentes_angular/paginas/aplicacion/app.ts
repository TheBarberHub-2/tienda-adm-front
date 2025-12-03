import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CHeaderBootstrap } from '../../ui/c-header/c-header-bootstrap/c-header-bootstrap';
import { CFooter } from '../../ui/c-footer/c-footer';
import { CHeaderBEM } from '../../ui/c-header/c-header-bem/c-header-bem';
import { Inicio } from '../../paginas/inicio/inicio';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CHeaderBootstrap, CHeaderBEM, CFooter, Inicio],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('tienda-adm-front');
}
