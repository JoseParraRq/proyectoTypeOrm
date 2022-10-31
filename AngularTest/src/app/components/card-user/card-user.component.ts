import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import {ServiceUserService} from '../../services/service-user.service';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {
public id: number;
public currentUser?:User;
  constructor(public activatedRoute: ActivatedRoute, public serviceUser:ServiceUserService) {

    let idObject = this.activatedRoute.snapshot.url;
    
    for(var i=0; i<idObject.length;i++){
      var element = idObject[i];
      let enteroId = new Number(element.path);    
      this.id = enteroId.valueOf(); //segunda forma de traer el id que se me ocurrio viendo las propiedades
    }
   }



  ngOnInit(): void {
let user = this.serviceUser.getUserById(this.id).subscribe(res=>{
let array: any[] = [];
array.push(res);
   const map = array.map((x) => {
     return {
       data: x.data
     }
   }
   );
for(var i=0;i<map.length;i++){
var element = map[i];
this.currentUser = element.data[0].user;
console.log("here the currents userrrrrr",this.currentUser);
};
  }
); 
      
  }
}
