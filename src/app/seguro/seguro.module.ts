import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguroRoutingModule } from './seguro-routing.module';
import { SeguroDetalheComponent } from './seguro-detalhe/seguro-detalhe.component';
import { SeguroListagemComponent } from './seguro-listagem/seguro-listagem.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        SeguroDetalheComponent,
        SeguroListagemComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SeguroRoutingModule,
        SharedModule
    ]
})
export class SeguroModule { }
