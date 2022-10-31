import { Component, OnInit } from '@angular/core';
import { ServiceUserService } from '../../services/service-user.service';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.scss']
})
export class GetUsersComponent implements OnInit {
  datosUser: User[] = [];
  user:User;
  userById:User;
  constructor(
    private serviceUser: ServiceUserService,
    public router:Router
  ) { }

  ngOnInit(): void {

    let array: any[] = [];
    let array1: any[] = [];

    this.serviceUser.getAllUsers().subscribe((datos: any) => {
console.log("respuesta de backend api",datos);

      array.push(datos);
      const map = array.map((x) => {
        return {
          data: x.data
        }
      }
      );
for(var i=0;i<map.length;i++){
var element = map[i];
array1.push(element);

this.datosUser= element.data[0].users;
}
    }
    );
 }

 getUserById(id:number):void{    
  this.serviceUser.getUserById(id).subscribe((datos)=>{
   console.log("respuesta de api ger UserById",datos);
   let array: any[] = [];
   array.push(datos);
      const map = array.map((x) => {
        return {
          data: x.data
        }
      }
      );
for(var i=0;i<map.length;i++){
var element = map[i];
  this.userById = element.data[0].user;
  };
}
)
}
}


