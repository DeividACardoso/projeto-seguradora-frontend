import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeguroListagemComponent } from './seguro-listagem/seguro-listagem.component';
import { SeguroDetalheComponent } from './seguro-detalhe/seguro-detalhe.component';

const routes: Routes = [
  {path: 'lista', component: SeguroListagemComponent},
  {path: 'detalhe', component: SeguroDetalheComponent},
  {path: 'detalhe/:id', component: SeguroDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguroRoutingModule { }
