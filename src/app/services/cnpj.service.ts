import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',  // A injeção de dependências funciona normalmente aqui
})
export class CnpjService {
  private apiUrl = '/v1/cnpj';

  constructor(private http: HttpClient) { }

  buscarCnpj(cnpj: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${cnpj}`);
  }
}
