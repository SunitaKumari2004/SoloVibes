import { Component } from '@angular/core';
import { UsersdataService } from '../services/usersdata.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
  export class ContactComponent {
  // just for try to get the data in console
  getvalue(val: string) {
    console.warn(val);
  }

  getmsgdata(data: any){
    console.warn(data);
  }

  showmsginfo() {
    alert("msg sent successfully");
  }

  // for getting data from api
  users: any;
  posts: any;
  constructor(private usersdata: UsersdataService) {
    this.usersdata.users().subscribe((data) => {
      console.warn("data:", data);
      this.users = data;
    });
  }
  // save data to api
  saveusers: any
  getformdata(data: any) {
    // console.warn(data)
    this.usersdata.saveusersmsg(data).subscribe((result) => {
      console.warn(result)

    })
  }
}
