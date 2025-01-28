import { Component } from '@angular/core';
import{ UsersdataService} from '../services/usersdata.service'

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

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
  getformdata(data: any) {
    // console.warn(data)
    this.usersdata.savebookingData(data).subscribe((result) => {
      console.warn(result)

    })

  }

}

