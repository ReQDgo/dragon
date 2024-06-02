import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) {}

  buscarAlmacenPorCodigo(codigoAlmacen: string): Observable<any> {
    return this.http.post<any>(
     'http://localhost:8000/api/almacen/comprobar-almacen',
     { codigoAlmacen: codigoAlmacen }
    );
  }

  actualizarExistenciasMaterial(materiales: { id_material: number, cantidad: number }[]): Observable<any> {
    return this.http.post('http://localhost:8000/api/almacen/actualizar-existencias', { materiales });
  }
}

