import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup, Validators,AsyncValidator, NG_ASYNC_VALIDATORS} from '@angular/forms'
import { User } from 'src/app/interfaces/user';
import {ServiceUserService} from '../../services/service-user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
createForm!: FormGroup;

constructor(
  public readonly fb:FormBuilder,
  public userService:ServiceUserService,
  public router:Router
  ) { 
  
}

  ngOnInit():void {
  this.createForm = this.initForm();
}

initForm():FormGroup{
return this.fb.group(
{
  firstName:['',Validators.required],
  surName:['',Validators.required],
  email:['',Validators.required],
  password:['',Validators.required],
  userTypeId:['',Validators.required]
}
)
}

  createUserComponent():void{    
    this.userService.createUser(this.createForm.value).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['']);
      },
      err=>console.error(err)
    )

  }
}
