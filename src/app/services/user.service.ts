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
    return this.http.getAll<Usuario>(this.url)
  }

}
