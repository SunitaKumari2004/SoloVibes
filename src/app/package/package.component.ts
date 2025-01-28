import { Component } from '@angular/core';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent {
  getvalue(val:string){
    console.warn(val);

  }
  showinfo()
  {
    alert("booking successfully");
    alert("you will get a your booking info in your mail")
  }

}
