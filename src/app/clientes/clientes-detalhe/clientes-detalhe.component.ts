import { Cliente } from 'src/app/shared/model/cliente';
import { ClienteService } from 'src/app/shared/service/cliente.service';
import { Endereco } from 'src/app/shared/model/endereco'
import { EnderecoService } from 'src/app/shared/service/endereco.service'
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

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

  constructor(private clienteService : ClienteService,
              private enderecoService: EnderecoService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.idCliente = params['id'];

    if(this.idCliente){
      this.buscarCliente();
    }
  });

  this.enderecoService.listarTodos().subscribe(
    resultado => {
      this.enderecos = resultado;
    },
    erro => {
      console.log('Erro ao buscar Clientes', erro);
    }
  )
  }

buscarCliente() {
  this.clienteService.pesquisarPorId(this.idCliente).subscribe(
    resultado =>{
      this.cliente = resultado;
    },
    erro =>{
      Swal.fire('Erro', 'Erro ao buscar cliente com ID (' + this.idCliente + ') : ', 'error');
      return;
    }
  )
}

salvar(form: NgForm){
  if(form.invalid){
    Swal.fire("Erro", "Formulário inválido", 'error');
  }
  if(this.idCliente){
    this.atualizar();
  } else {
    this.inserirCliente();
  }
}
inserirCliente() {
  this.clienteService.salvar(this.cliente).subscribe(
    sucesso => {
      Swal.fire("Sucesso", "Cliente salvo com sucesso", 'success');
      this.cliente = new Cliente();
    },
    erro => {
      Swal.fire("Erro", "Não foi possivel salvar o cliente: " + erro.error.message, 'error');
    }
  )
}
atualizar() {
  this.clienteService.atualizar(this.cliente).subscribe(
    sucesso => {
      Swal.fire("Sucesso", "Cliente Atualizado com Sucesso!", 'success');
    },
    erro => {
      Swal.fire("Erro", "Não foi possivel atualizar o Cliente", 'error');
    }
  )
}

public voltar(){
  this.router.navigate(['/clientes/lista'])
}

public compareById(r1: any, r2: any): boolean{
  return r1 && r2 ? r1.id === r2.id : r1 === r2;
}

}
