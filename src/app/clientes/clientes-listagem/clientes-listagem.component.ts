import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared/model/cliente'
import { ClienteService } from './../../shared/service/cliente.service';
import { ClienteSeletor } from 'src/app/shared/model/seletor/cliente.seletor';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-clientes-listagem',
  templateUrl: './clientes-listagem.component.html',
  styleUrls: ['./clientes-listagem.component.scss']
})
export class ClientesListagemComponent implements OnInit{

  public clientes: Array<Cliente> = new Array();
  public seletor: ClienteSeletor = new ClienteSeletor();
  fileName = "RelatorioClientes.xlsx";

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

  editar(id: number){
    this.router.navigate(['clientes/detalhe', id])
  }

  inspecionar(){
    //TODO - Tela de inspeção de usuário.
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

  excluir(id: number){
    Swal.fire({
      title: 'Você está certo disso?',
      text: 'Deseja excluir o cliente #' + id + "?",
      icon: 'warning',
      showCancelButton: true,
    }).then(r => {
      this.ClienteService.excluir(id).subscribe(
        sucesso => {
          Swal.fire("Sucesso", "Cliente excluido com sucesso!", 'success');
          this.buscarClientes();
        },
        erro => {
          Swal.fire("Erro", "Erro ao excluir o cliente: " + erro, 'error')
        }
      )
    })
  }
  exportExcel(){
    let data = document.getElementById("tabelaClientes");
    const ws:XLSX.WorkSheet = XLSX.utils.table_to_sheet(data)

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,'Sheet1');

    XLSX.writeFile(wb, this.fileName);
  }
}

