import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersdataService {

  // url='https://jsonplaceholder.typicode.com/posts'
  url='http://localhost:3000/msgData'
 
  constructor(private http:HttpClient){}
  users(){
    // https://jsonplaceholder.typicode.com/todos/1
    return this.http.get(this.url);
  }
  saveusersmsg(data:any){
    // return this.http.post('https://jsonplaceholder.typicode.com/posts',data);
    return this.http.post(this.url,data)

  }
  savebookingData(data:any){
    // return this.http.post('https://jsonplaceholder.typicode.com/posts',data);
    return this.http.post('http://localhost:3000/bookingData',data)

  }
  user_signup(data:any){
    // return this.http.post('https://jsonplaceholder.typicode.com/posts',data);
    return this.http.post('http://localhost:3000/user',data)

  }

  

}
