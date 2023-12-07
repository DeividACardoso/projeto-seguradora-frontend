import { Router } from '@angular/router';
import { Veiculo } from './../../shared/model/veiculo';
import { Component, OnInit } from '@angular/core';
import { VeiculoSeletor } from 'src/app/shared/model/seletor/veiculo.seletor';
import { VeiculoService } from 'src/app/shared/service/veiculo.service';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-veiculos-listagem',
  templateUrl: './veiculos-listagem.component.html',
  styleUrls: ['./veiculos-listagem.component.scss']
})

export class VeiculosListagemComponent implements OnInit{
  public veiculos: Array<Veiculo> = new Array();
  public seletor: VeiculoSeletor = new VeiculoSeletor();
  fileName = "RelatorioVeiculos.xlsx"

  constructor(private veiculoService: VeiculoService, private router: Router){
  }

  ngOnInit(): void{
    this.buscarVeiculos();
  }

  limpar(){
    this.seletor = new VeiculoSeletor();
  }

  editar(id: number){
    this.router.navigate(['clientes/detalhe', id])
  }

  inspecionar(){
    throw new Error('Method not implemented.');
  }

  excluir(id: number){
    Swal.fire({
      title: 'Você está certo disso?',
      text: 'Deseja excluir o veiculo #' + id + "?",
      icon: 'warning',
      showCancelButton: true,
    }).then(r => {
      this.veiculoService.excluir(id).subscribe(
        sucesso => {
          Swal.fire("Sucesso", "Veiculo excluido com sucesso!", 'success');
          this.buscarVeiculos();
        },
        erro => {
          Swal.fire("Erro", "Erro ao excluir o veiculo: " + erro, 'error')
        }
      )
    })
  }

  pesquisar(){
    this.veiculoService.listarComFiltro(this.seletor).subscribe(
    resultado => {
      this.veiculos = resultado;
    },
    erro =>{
      console.log('Erro ao buscar veiculos com filtro', erro);
    }
    )
  }

  buscarVeiculos() {
    this.veiculoService.listarTodos().subscribe(
      resultado => {
        this.veiculos = resultado;
      },
      erro => {
        console.log('Erro ao buscar Veiculos: ', erro);
      }
    )
  }

  exportExcel(){
    let data = document.getElementById("tabelaVeiculos");
    const ws:XLSX.WorkSheet = XLSX.utils.table_to_sheet(data)

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,'Sheet1');

    XLSX.writeFile(wb, this.fileName);
  }
}
