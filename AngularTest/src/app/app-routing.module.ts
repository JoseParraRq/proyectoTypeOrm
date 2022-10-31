import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GetUsersComponent} from './components/get-users/get-users.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { CardUserComponent } from './components/card-user/card-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

const routes: Routes = [

  {
    path:'', 
    component:GetUsersComponent,
    pathMatch:'full',
  },
  {
    path:'crearUsuario', 
    component:CreateUserComponent,
    pathMatch:'full',
  },
  {
    path:'user/detail/:id', 
    component:CardUserComponent,
    pathMatch:'full',
  },
  {
    path:'user/update/:id', 
    component:EditUserComponent,
    pathMatch:'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
