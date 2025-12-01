import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { HTTPService } from './http.service'
//import { Tarea } from '../models/Tarea'

@Injectable({
  providedIn: 'root'
})

export class TareaService {
  /*url: string = 'tareas/'

  private _totalTareas: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  public totalTareas$: Observable<number> = this._totalTareas.asObservable()

  constructor(private httpService: HTTPService) {
    this.calculaTotalTareas()
  }

  password: string = '123'

  getPassword(): string {
    return this.password;
  }

  getAll() {
    return this.httpService.getAll<Tarea>(this.url)
  }

  get(id: string) {
    return this.httpService.getById<Tarea>(this.url + id)
  }

  put(tarea: Tarea) {
    return this.httpService.update<Tarea>(this.url + tarea.id, tarea)
  }

  delete(id: string) {
    return this.httpService.deleteById<Tarea>(this.url + id)
  }

  calculaTotalTareas() {
    this.getAll().subscribe(tareas => {
      this._totalTareas.next(tareas.length)
    })
  }
    */
}