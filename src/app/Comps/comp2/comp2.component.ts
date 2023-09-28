import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {
  name:string = "Devil";
  constructor(public dService:DesignUtilityService) { 
    this.dService.name.subscribe(res=>{
      this.name = res
    })
  }

  onchange(uname:any){
    console.log(uname.value)
    this.dService.name.next(uname.value)
    
  }

}
