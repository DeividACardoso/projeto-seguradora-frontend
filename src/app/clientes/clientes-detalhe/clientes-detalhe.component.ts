import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/shared/model/cliente';
import { ClienteService } from 'src/app/shared/service/cliente.service';
import { Endereco } from 'src/app/shared/model/endereco'
import { EnderecoService } from 'src/app/shared/service/endereco.service'
import swal from 'sweetalert2';

@Component({
  selector: 'app-clientes-detalhe',
  templateUrl: './clientes-detalhe.component.html',
  styleUrls: ['./clientes-detalhe.component.scss']
})
export class ClientesDetalheComponent implements OnInit{
  public enderecos:Endereco[] = []
  public cliente:Cliente = new Cliente();
  public idCliente: number;
  
  @ViewChild('ngForm')
  public ngForm: NgForm;
  enderecoService: any;

  constructor(private clienteService : ClienteService,
              private router: Router,
              private route: ActivatedRoute) {}

              ngOnInit(): void {
                this.route.params.subscribe(params => {
                  this.idCliente = params['id']; //'id' é o nome do parâmetro definido na rota
            
                  if(this.idCliente){
                    this.buscarCliente();
                  }
                });
            
                this.enderecoService.listarTodos().subscribe(
                  (                  resultado: Endereco[]) => {
                    this.enderecos = resultado;
                  },
                  (                  erro: any) => {
                    console.log('Erro ao buscar Clientes', erro);
                  }
                )
              }
  buscarCliente() {
    this.clienteService.pesquisarPorId(this.cliente.id).subscribe(
      resultado =>{
        this.cliente = resultado;
      }, 
      erro =>{
        swal.fire('Erro', 'Erro ao buscar cliente com ID (' + this.idCliente + ') : ', 'error');
        return;
      }
    )
  }
  
  
public compareById(r1: any, r2: any): boolean{
  return r1 && r2 ? r1.id === r2.id : r1 === r2;
}

}
