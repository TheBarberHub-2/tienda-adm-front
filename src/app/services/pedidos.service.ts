import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { HTTPService } from './http.service'
import { Usuario } from '../models/usuario'
//import { Tarea } from '../models/Tarea'

@Injectable({
  providedIn: 'root'
})

export class PedidoService {
  url: string = 'usuarios/'

  // private _totalTareas: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  // public totalTareas$: Observable<number> = this._totalTareas.asObservable()

  constructor(private httpService: HTTPService) {
    // this.calculaTotalTareas()
  }

  // password: string = '123'

  // getPassword(): string {
  //   return this.password;
  // }

  // get(id: string) {
  //   return this.httpService.getById<Tarea>(this.url + id)
  // }

  // put(tarea: Tarea) {
  //   return this.httpService.update<Tarea>(this.url + tarea.id, tarea)
  // }

  // delete(id: string) {
  //   return this.httpService.deleteById<Tarea>(this.url + id)
  // }

  // calculaTotalTareas() {
  //   this.getAll().subscribe(tareas => {
  //     this._totalTareas.next(tareas.length)
  //   })
  // }

  getAll() {
    return this.httpService.getAll<Usuario>(this.url)
  }

}