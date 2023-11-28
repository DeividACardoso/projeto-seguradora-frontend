import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesListagemComponent } from './clientes-listagem/clientes-listagem.component';
import { ClientesDetalheComponent } from './clientes-detalhe/clientes-detalhe.component';


@NgModule({
  declarations: [
    ClientesListagemComponent,
    ClientesDetalheComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
