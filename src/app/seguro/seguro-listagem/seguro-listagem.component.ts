import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Seguro } from 'src/app/shared/model/seguro';
import { SeguroService } from './../../shared/service/seguro.service';
import { SeguroSeletor } from 'src/app/shared/model/seletor/seguro.seletor';

@Component({
  selector: 'app-seguro-listagem',
  templateUrl: './seguro-listagem.component.html',
  styleUrls: ['./seguro-listagem.component.scss']
})
export class SeguroListagemComponent implements OnInit{
editar(arg0: number) {
throw new Error('Method not implemented.');
}
inspecionar() {
throw new Error('Method not implemented.');
}

  public seguros: Array<Seguro> = new Array();
  public seletor: SeguroSeletor = new SeguroSeletor();

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

}
