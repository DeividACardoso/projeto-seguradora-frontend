import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeguroListagemComponent } from './seguro-listagem/seguro-listagem.component';

const routes: Routes = [
  {path: 'lista', component: SeguroListagemComponent},
  {path: 'detalhe', component: SeguroListagemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguroRoutingModule { }
