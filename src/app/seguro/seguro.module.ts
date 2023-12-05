import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguroRoutingModule } from './seguro-routing.module';
import { SeguroDetalheComponent } from './seguro-detalhe/seguro-detalhe.component';
import { SeguroListagemComponent } from './seguro-listagem/seguro-listagem.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SeguroDetalheComponent,
    SeguroListagemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SeguroRoutingModule
  ]
})
export class SeguroModule { }
