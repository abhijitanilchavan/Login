import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: UserserviceService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      mail: [''],
      password: ['']
    });
  }

  onSubmit() {
    this.service.login(this.loginForm.value).subscribe({
      next: (res) => {
        alert("Login Successful");
      this.router.navigateByUrl('/feedback');
        console.log(res);
      }
    });
  }
}