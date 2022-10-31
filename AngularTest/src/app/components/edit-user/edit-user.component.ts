import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { ServiceUserService } from 'src/app/services/service-user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  updateForm!: FormGroup;
  public id: number;
  public currentUser:User;
  constructor(
     public readonly fb:FormBuilder,
    public userService:ServiceUserService,
    public router:Router,public activatedRoute: ActivatedRoute) { 

      let idObject = this.activatedRoute.snapshot.url;
    
    for(var i=0; i<idObject.length;i++){
      var element = idObject[i];
      let enteroId = new Number(element.path);    
      this.id = enteroId.valueOf(); //segunda forma de traer el id que se me ocurrio viendo las propiedades
    }
    }

  ngOnInit(): void {
    this.updateForm = this.initForm();
  }

  initForm():FormGroup{
    return this.fb.group(
    {
      userId:[this.id],
      firstName:[''],
      surName:[''],
      email:[''],
      password:['']
    }
    )
    }
    
    updateUserComponent():void{    
      
      console.log("here the updatteeeee",this.updateForm.value);
      this.userService.editUser(this.updateForm.value).subscribe(
        res=>{
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
        let idObject = this.activatedRoute.snapshot.url;
    
    for(var i=0; i<idObject.length;i++){
      var elemento = idObject[i];
      let enteroId = new Number(elemento.path);    
      var idUrl = enteroId.valueOf(); //segunda forma de traer el id que se me ocurrio viendo las propiedades
    }
        
    this.router.navigate([`/user/detail/${idUrl}`]);
        }
      )
      

      /*this.userService.createUser(this.createForm.value).subscribe(
        res=>{
          console.log(res);
          this.router.navigate(['']);
        },
        err=>console.error(err)
      )
*/
  }
}