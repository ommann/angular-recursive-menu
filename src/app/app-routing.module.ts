import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuPageComponent} from "./pages/menu-page/menu-page.component";

const routes: Routes = [
  { path: '', component: MenuPageComponent },
  { path: ':id', component: MenuPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
