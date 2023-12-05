import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Veiculo } from 'src/app/shared/model/veiculo';

@Component({
  selector: 'app-veiculos-detalhe',
  templateUrl: './veiculos-detalhe.component.html',
  styleUrls: ['./veiculos-detalhe.component.scss']
})
export class VeiculosDetalheComponent {

  @ViewChild('ngForm')
  public ngForm: NgForm;

  veiculo:Veiculo = new Veiculo();

  voltar(){

  }

  salvar(ngForm: NgForm){

  }
}
