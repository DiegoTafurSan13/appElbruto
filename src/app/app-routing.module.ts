import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ConfcharacterComponent } from "./confcharacter/confcharacter.component";
const routes: Routes = [
  {
    path:"",
    redirectTo:"/app/home",
    pathMatch:"full"
  },
  {
    path:"app/home",
    component:HomeComponent
  },
  {
    path:'app/home/confCharacter',
    component:ConfcharacterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
