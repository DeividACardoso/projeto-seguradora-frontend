import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesListagemComponent } from './clientes-listagem/clientes-listagem.component';
import { ClientesDetalheComponent } from './clientes-detalhe/clientes-detalhe.component';
import { FormsModule } from '@angular/forms';
import { CpfPipe } from '../cpf.pipe';


@NgModule({
  declarations: [
    ClientesListagemComponent,
    CpfPipe,
    ClientesDetalheComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
