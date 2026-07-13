import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-addfeedback',
  templateUrl: './addfeedback.component.html',
  styleUrls: ['./addfeedback.component.css']
})
export class AddfeedbackComponent implements OnInit{
  constructor(private fb:FormBuilder,private src:UserserviceService){}
  fg!:FormGroup;

  ngOnInit(): void {
      this.fg=this.fb.group({
        feedback:['']
      });
  }

  onadd(){
    this.src.addfeedback(this.fg.value).subscribe();
  }


}
