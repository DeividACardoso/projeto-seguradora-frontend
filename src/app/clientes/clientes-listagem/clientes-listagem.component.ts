import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared/model/cliente'
import { ClienteService } from './../../shared/service/cliente.service';
import { ClienteSeletor } from 'src/app/shared/model/seletor/cliente.seletor';

@Component({
  selector: 'app-clientes-listagem',
  templateUrl: './clientes-listagem.component.html',
  styleUrls: ['./clientes-listagem.component.scss']
})
export class ClientesListagemComponent implements OnInit{

  public clientes: Array<Cliente> = new Array();
  public seletor: ClienteSeletor = new ClienteSeletor();

  constructor(private ClienteService: ClienteService, private router: Router){
  }

  ngOnInit(): void{
    this.buscarClientes();
  }
  limpar(){
    this.seletor = new ClienteSeletor();
  }
  pesquisar(){
    this.ClienteService.listarComFiltro(this.seletor).subscribe(
    resultado => {
      this.clientes = resultado;
    },
    erro =>{
      console.log('Erro ao buscar clientes com filtro', erro);
    }
    )
  }

  buscarClientes() {
    this.ClienteService.listarTodos().subscribe(
      resultado => {
        this.clientes = resultado;
      },
      erro => {
        console.log('Erro ao buscar Clientes: ', erro);
      }
    )
  }
}
