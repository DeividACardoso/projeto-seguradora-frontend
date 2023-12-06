import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren:() => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'clientes', loadChildren:() => import('./clientes/clientes.module').then(m => m.ClientesModule)},
  {path: 'veiculos', loadChildren:() => import('./veiculos/veiculos.module').then(m => m.VeiculosModule)},
  {path: 'seguros', loadChildren:() => import('./seguro/seguro.module').then(m => m.SeguroModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
