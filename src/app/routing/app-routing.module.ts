import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '.././components/user/user.component';
import { HomeComponent } from '../components/home/home.component';
const routes: Routes = [
  //{path: "", redirectTo: "", pathMatch: "full"},
  {path:'interfell', component: UserComponent},
  {path:'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
