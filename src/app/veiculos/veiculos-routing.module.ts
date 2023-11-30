import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculosListagemComponent } from './veiculos-listagem/veiculos-listagem.component';
import { VeiculosDetalheComponent } from './veiculos-detalhe/veiculos-detalhe.component';

const routes: Routes = [
  {path: 'lista', component: VeiculosListagemComponent},
  {path: 'detalhe', component: VeiculosDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculosRoutingModule { }
