import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {

  server = "http://localhost:3000"
  
  constructor(
    private serviceUser:HttpClient
  ) { 

  }
 getAllUsers():Observable<any>{
return this.serviceUser.get(`${this.server}/getAllUsers`);
}

getUserById(id:number){
  const body = {
    userId:id
  }
  console.log("here the iddd from user",id);
  return this.serviceUser.post(`${this.server}/getUserById`,body);
  }

createUser(user:User){
  return this.serviceUser.post(`${this.server}/createUser`,user);
  }

  editUser(user:User){
console.log("editar usuariooooo",user);
return this.serviceUser.put(`${this.server}/updateUser`,user);
    }
}

