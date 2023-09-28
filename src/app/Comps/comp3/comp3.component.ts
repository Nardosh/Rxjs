import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component {

  name : string = "Devil"
  constructor(public dService:DesignUtilityService) {
    this.dService.name.subscribe(res=>{
      this.name = res;
    })
     }


     onchange(uname:any){
      this.dService.name.next(uname.value)

     }
}
