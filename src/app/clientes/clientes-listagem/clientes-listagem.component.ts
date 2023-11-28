import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Cliente } from 'src/app/shared/model/cliente'
import { ClienteService } from './../../shared/service/cliente.service';

@Component({
  selector: 'app-clientes-listagem',
  templateUrl: './clientes-listagem.component.html',
  styleUrls: ['./clientes-listagem.component.scss']
})
export class ClientesListagemComponent {
  public clientes: Array<Cliente> = new Array();

  constructor(private ClienteService: ClienteService, private router: Router){
  }

  ngOnInit(): void{
    this.buscarClientes();
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
