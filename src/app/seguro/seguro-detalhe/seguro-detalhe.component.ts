import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Seguro } from 'src/app/shared/model/seguro';
import { SeguroService } from 'src/app/shared/service/seguro.service';
import Swal from 'sweetalert2';
import { Cliente } from 'src/app/shared/model/cliente';

@Component({
  selector: 'app-seguro-detalhe',
  templateUrl: './seguro-detalhe.component.html',
  styleUrls: ['./seguro-detalhe.component.scss']
})
export class SeguroDetalheComponent implements OnInit{
  seguro:Seguro = new Seguro();
  public idSeguro: number;
  public listaClientes: Array<String> = new Array();

  @ViewChild('ngForm')
  public ngForm: NgForm;


  constructor(private seguroService : SeguroService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.carregarListaClientes();
    this.route.params.subscribe(params => {
      this.idSeguro = params['id'];


      if(this.idSeguro){
        this.buscarSeguro();
      }
    });
  }

  voltar(){
    this.router.navigate(['/seguros/lista'])
  }

  carregarListaClientes() {
    this.seguroService.getListaClientes().subscribe(
      (clientes) => {
        this.listaClientes = clientes.map(cliente => cliente.nome); // Mantém a lista de objetos de cliente
      },
      (error) => {
        console.error('Erro ao obter lista de clientes', error);
      }
    );
  }

  buscarSeguro() {
    this.seguroService.pesquisarPorId(this.idSeguro).subscribe(
      resultado =>{
        this.seguro = resultado;
      },
      erro =>{
        Swal.fire('Erro', 'Erro ao buscar seguro com ID (' + this.idSeguro + ') : ', 'error');
        return;
      }
    )
  }

salvar(form: NgForm){
  if(form.invalid){
    Swal.fire("Erro", "Formulário inválido", 'error');
  }

  if(this.idSeguro){
    this.atualizar();
  } else {
    this.inserirSeguro();
  }
}
inserirSeguro() {
  this.seguroService.salvar(this.seguro).subscribe(
    sucesso => {
      Swal.fire("Sucesso", "Seguro salvo com sucesso", 'success');
      this.seguro = new Seguro();
    },
    erro => {
      Swal.fire("Erro", "Não foi possivel salvar o seguro: " + erro, 'error');
    }
  )
}
atualizar() {
  this.seguroService.atualizar(this.seguro).subscribe(
    sucesso => {
      Swal.fire("Sucesso", "Seguro Atualizado com Sucesso!", 'success');
    },
    erro => {
      Swal.fire("Erro", "Não foi possivel atualizar o seguro", 'error');
    }
  )
}
}
