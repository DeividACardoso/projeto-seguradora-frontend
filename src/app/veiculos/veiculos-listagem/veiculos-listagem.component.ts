import { Router } from '@angular/router';
import { Veiculo } from './../../shared/model/veiculo';
import { Component, OnInit } from '@angular/core';
import { VeiculoSeletor } from 'src/app/shared/model/seletor/veiculo.seletor';
import { VeiculoService } from 'src/app/shared/service/veiculo.service';

@Component({
  selector: 'app-veiculos-listagem',
  templateUrl: './veiculos-listagem.component.html',
  styleUrls: ['./veiculos-listagem.component.scss']
})

export class VeiculosListagemComponent implements OnInit{
  public veiculos: Array<Veiculo> = new Array();
  public seletor: VeiculoSeletor = new VeiculoSeletor();

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
    //TODO - Tela de inspeção de usuário.
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
}
