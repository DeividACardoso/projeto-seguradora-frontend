import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesListagemComponent } from './clientes-listagem/clientes-listagem.component';
import { ClientesDetalheComponent } from './clientes-detalhe/clientes-detalhe.component';

const routes: Routes = [
  {path: 'lista', component: ClientesListagemComponent},
  {path: 'detalhe', component: ClientesDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
