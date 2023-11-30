import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../model/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  private readonly API = 'http://localhost:8080/api/enderecos';

  constructor(private httpClient: HttpClient) {}

  listarTodos(): Observable<Array<Endereco>> {
    return this.httpClient.get<Array<Endereco>>(this.API+'/todos');
  }

}