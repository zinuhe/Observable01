import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import components
import { Example01Component } from './example01/example01.component';
import { Example02Component } from './example02/example02.component';
import { Example03Component } from './example03/example03.component';


const routes: Routes = [
    { path: 'example_01', component: Example01Component }
  , { path: 'example_02', component: Example02Component }
  , { path: 'example_03', component: Example03Component }
  , { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
  , { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
