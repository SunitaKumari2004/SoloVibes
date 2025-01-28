import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
    
    getdata(data:any){
      console.warn(data);
      // search=data;
      
    }
    
    show_goa(){
       let search='';
      if(search=='goa'){
        
        
      }
    }
    


}
