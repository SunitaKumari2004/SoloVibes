import { Component } from '@angular/core';
import{ UsersdataService} from '../services/usersdata.service'

@Component({
  selector: 'app-resister',
  templateUrl: './resister.component.html',
  styleUrls: ['./resister.component.css']
})
export class ResisterComponent {
  // getvalue(val:string){
  //   console.warn(val);

  // }
  showinfo() {
    alert("booking successfully");
    alert("you will get a your booking info in your mail")
  }
  getbookingdata(data: any) {
    console.warn(data);
  }
// for getting the data of api
  users: any;
  constructor(private usersdata: UsersdataService) {
    this.usersdata.users().subscribe((data) => {
      console.warn("data:", data);
      this.users = data;
    });
  }
// save data to api
  saveusers: any
  user_signup(data: any) {
    // console.warn(data)
    this.usersdata.user_signup(data).subscribe((result) => {
      console.warn(result)

    })

  }

}
