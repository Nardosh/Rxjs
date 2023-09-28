import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs';



@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent {
  constructor(public designService:DesignUtilityService, public http:HttpClient){}

  fetching:boolean = false;
  person:any;

  fetchDetail(){
    this.fetching = true;
    this.http.get('https://jsonplaceholder.typicode.com/users/1').pipe(retry(3))
    .subscribe(res=>{
      console.log(res);
      this.person = res;
      // console.log(this.person);
      this.fetching = false;

    
    })
  
  }

}
