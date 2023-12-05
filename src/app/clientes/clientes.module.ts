import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesListagemComponent } from './clientes-listagem/clientes-listagem.component';
import { ClientesDetalheComponent } from './clientes-detalhe/clientes-detalhe.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";
@NgModule({
    declarations: [
        ClientesListagemComponent,
        ClientesDetalheComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ClientesRoutingModule,
        SharedModule
    ]
})
export class ClientesModule { }
