import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sec';
  // constructor(){
    // setTimeout(() => {
    //   this.title="changed title";
      
    // }, 2000);
  // }
 getName()
 {
   alert("signup successfully");
 }
getdata(val:string){
  console.warn(val);
  // alert("message sent successfully");

}


}
