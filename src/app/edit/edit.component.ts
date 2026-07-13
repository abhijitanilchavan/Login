import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserserviceService } from '../userservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  fg!: FormGroup;
  id:any;

  constructor(
    private fb: FormBuilder,
    private src: UserserviceService,
    private ac: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.fg = this.fb.group({
      feedback:['']
    });

    this.id = this.ac.snapshot.paramMap.get('id');

    this.src.singlefeed(this.id).subscribe((user:any)=>{
      this.fg.patchValue(user);
    });

  }

  update(){

    this.src.updatefeedback(this.id,this.fg.value).subscribe((res)=>{
      alert("Updated Successfully");
    });

  }

}