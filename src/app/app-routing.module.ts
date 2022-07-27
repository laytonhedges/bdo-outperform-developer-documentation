import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ApiDocsComponent } from './api-docs/api-docs.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'api-docs', component: ApiDocsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
