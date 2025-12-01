import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/componentes_angular/paginas/aplicacion/app.config';
import { App } from './app/componentes_angular/paginas/aplicacion/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
