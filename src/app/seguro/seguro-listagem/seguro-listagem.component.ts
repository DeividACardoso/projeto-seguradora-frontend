import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Seguro } from 'src/app/shared/model/seguro';
import { SeguroService } from './../../shared/service/seguro.service';
import { SeguroSeletor } from 'src/app/shared/model/seletor/seguro.seletor';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-seguro-listagem',
  templateUrl: './seguro-listagem.component.html',
  styleUrls: ['./seguro-listagem.component.scss']
})
export class SeguroListagemComponent implements OnInit{

inspecionar() {
throw new Error('Method not implemented.');
}

  public seguros: Array<Seguro> = new Array();
  public seletor: SeguroSeletor = new SeguroSeletor();
  fileName = "RelatorioSeguros.xlsx"

  constructor(private SeguroService: SeguroService, private router: Router){
  }

  ngOnInit(): void{
    this.buscarSeguros();
  }
  limpar(){
    this.seletor = new SeguroSeletor();
  }
  pesquisar(){
    this.SeguroService.listarComFiltro(this.seletor).subscribe(
      resultado => {
        this.seguros = resultado;
      },
      erro =>{
        console.log('Erro ao buscar Seguros com filtros: ', erro);
      }
    )
  }
  buscarSeguros() {
    this.SeguroService.listarTodos().subscribe(
      resultado => {
        this.seguros = resultado;
      },
      erro => {
        console.log('Erro ao buscar Seguros: ', erro);
      }
    )
  }

  editar(id: number) {
    this.router.navigate(['seguros/detalhe', id])
    }

    exportExcel(){
      let data = document.getElementById("tabelaSeguros");
      const ws:XLSX.WorkSheet = XLSX.utils.table_to_sheet(data)

      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb,ws,'Sheet1');

      XLSX.writeFile(wb, this.fileName);
    }
    
    excluir(id: number){
      Swal.fire({
        title: 'Você está certo disso?',
        text: 'Deseja excluir o seguro #' + id + "?",
        icon: 'warning',
        showCancelButton: true,
      }).then(r => {
        this.SeguroService.excluir(id).subscribe(
          sucesso => {
            Swal.fire("Sucesso", "Seguro excluido com sucesso!", 'success');
            this.buscarSeguros();
          },
          erro => {
            Swal.fire("Erro", "Erro ao excluir o seguro: " + erro, 'error')
          }
        )
      })
    }
}
