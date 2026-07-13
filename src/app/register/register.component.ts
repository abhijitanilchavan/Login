import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private fb:FormBuilder ,private src:UserserviceService){}
  loginForm!:FormGroup;
  ngOnInit(): void {
   this.loginForm=this.fb.group({
 username:[''],
 mail:[''],
 password:['']
   })
  }

onSubmit(){
  console.log(this.loginForm.value);
  this.src.registerUser(this.loginForm.value).subscribe();
   alert("register sucess")
}
}
