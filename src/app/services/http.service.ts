import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class HTTPService {
  url: string = 'http://localhost:3000/' // Aqui es la URL base de la API

  constructor(private http: HttpClient) { } // Aqui inyectamos el HttpClient para poder usarlo

  // Aqui van metodos que van a usar los metodos HTTP, siendo estos GET, POST, PUT, PATCH, DELETE

  //El Observable tiene <T> para que sea genérico, lo que significa que se puede usar para cualquier tipo de dato
  getAll<T>(route: string): Observable<T[]> { //se pone el route para que sea dinamico, lo que significa que se puede usar para cualquier recurso
    return this.http.get<T[]>(`${this.url}${route}`)
  }

  getById<T>(route: string): Observable<T> {
    return this.http.get<T>(`${this.url}${route}`)
  }

  //Al observable le ponemos tambien un newObject: T para que sea genérico, lo que significa que se puede usar para cualquier tipo de dato
  update<T>(route: string, newObject: T): Observable<T> {
    return this.http.put<T>(`${this.url}${route}`, newObject)
  }

  create<T>(route: string, newObject: T): Observable<T> {
    return this.http.post<T>(`${this.url}${route}`, newObject)
  }

  deleteById<T>(route: string): Observable<T> {
    return this.http.delete<T>(`${this.url}${route}`) // Aqui lo que le decimos que borre 
  }
}