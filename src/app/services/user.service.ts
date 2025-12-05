import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { HTTPService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'usuarios/'

  constructor(private http: HTTPService) { }

  getAll(): Observable<Usuario[]> {
    return this.http.getAll<Usuario>(this.url) // Aqui llamo al metodo getAll de la clase HTTPService
  }

  get(id: number): Observable<Usuario> {
    return this.http.getById<Usuario>(this.url + id) //
  }

  delete(id: number): Observable<Usuario> {
    return this.http.deleteById<Usuario>(this.url + id)
  }

  update(usuario: Usuario): Observable<Usuario> {
    return this.http.update<Usuario>(this.url + usuario.id, usuario)
  }

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.create<Usuario>(this.url, usuario)
  }


}
