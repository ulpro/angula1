import { ListeComponent } from './liste/liste.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { AjouterComponent } from './ajouter/ajouter.component';

const routes: Routes = [
  { path: '', component: ListeComponent },
  { path: 'liste', redirectTo: "" },
  {path:'ajouter', component:AjouterComponent},
  { path: 'details/:id', component: DetailComponent },
 // {path:"**",component: Pagenotfound} les deux erreur correspond a l'ensemble des pages qui ne dont pas pris en compte ne sont pas pris en charge 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
