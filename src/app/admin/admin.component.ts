import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  constructor(private src:UserserviceService,private router:Router){}
  feedback!:any[];
  ngOnInit(): void {
      
  this.src.viewfeedbacks().subscribe((user:any)=>{
    this.feedback=user;
  })
  }

  delete(id:number){
    this.src.deletefeedback(id).subscribe();
  }
  update(id:number){
    this.router.navigate(['/update',id]);
  }
}
