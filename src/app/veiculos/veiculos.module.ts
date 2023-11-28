import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeiculosRoutingModule } from './veiculos-routing.module';
import { VeiculosDetalheComponent } from './veiculos-detalhe/veiculos-detalhe.component';
import { VeiculosListagemComponent } from './veiculos-listagem/veiculos-listagem.component';


@NgModule({
  declarations: [
    VeiculosDetalheComponent,
    VeiculosListagemComponent
  ],
  imports: [
    CommonModule,
    VeiculosRoutingModule
  ]
})
export class VeiculosModule { }
