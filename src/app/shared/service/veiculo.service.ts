import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Veiculo } from 'src/app/shared/model/veiculo'
import { Observable } from "rxjs";
import { VeiculoSeletor } from 'src/app/shared/model/seletor/veiculo.seletor'

@Injectable({
  providedIn :'root'
})
export class VeiculoService{
  private readonly API = 'http://localhost:8080/api/veiculos'

  constructor(private httpClient: HttpClient) {}

  listarTodos(): Observable<Array<Veiculo>>{
    return this.httpClient.get<Array<Veiculo>>(this.API+'/todos');
  }

  pesquisarPorId(id: number){
    return this.httpClient.get<Veiculo>(this.API+'/'+id)
  }

  listarComFiltro(seletor: VeiculoSeletor): Observable<Array<Veiculo>>{
    return this.httpClient.post<Array<Veiculo>>(this.API+'/filtro', seletor);
  }

  salvar(veiculo: Veiculo): Observable<Veiculo>{
    return this.httpClient.post<Veiculo>(this.API, veiculo);
  }

  atualizar(veiculo : Veiculo): Observable<Veiculo>{
    return this.httpClient.post<Veiculo>(this.API, veiculo);
  }

  excluir(id: number): Observable<Veiculo>{
    return this.httpClient.delete<Veiculo>(this.API+'/delete-id'+id);
  }
}
