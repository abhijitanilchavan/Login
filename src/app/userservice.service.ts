import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor( private http:HttpClient) { }

  registerUser(user:any){
    return this.http.post("http://localhost:8080/register",user);
  }
  login(us:any){
    return this.http.post("http://localhost:8080/login",us);
  }
  
  addfeedback(fb:any){
    return this.http.post("http://localhost:8080/feedback",fb);
  }

  viewfeedbacks(){
    return this.http.get("http://localhost:8080/admin");
  }

  deletefeedback(id:number){
    return this.http.delete("http://localhost:8080/"+id);
  }

 updatefeedback(id:any,data:any){
  return this.http.put("http://localhost:8080/update/"+id,data);
}
  singlefeed(id:number){
    return this.http.get("http://localhost:8080/singlefeed/"+id);
  }
}
