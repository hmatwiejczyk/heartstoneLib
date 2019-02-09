import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomeComponentModule' },
  { path: 'about', loadChildren: './about/about.module#AboutComponentModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactComponentModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
