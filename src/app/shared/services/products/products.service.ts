import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Productos, SubCategorias } from '@shared/models';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Injections
  private _http = inject(HttpClient)

  
  public getProduct(): Observable<any>{
    return this._http
			.get<Productos>(`${environment.urlProductos}`, {
			})
    }

    public getSubcategorias(): Observable<any>{
      return this._http
        .get<SubCategorias>(`${environment.urlSubcategorias}`, {
        })
      }
}