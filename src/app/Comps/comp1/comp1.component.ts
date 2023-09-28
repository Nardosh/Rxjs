import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  name:string = "Devil";
  uname: string = '';
  constructor(public dService:DesignUtilityService) { 
    this.dService.name.subscribe(res=>{
      this.name = res
    })
  }

  onchange(uname:any){
    console.log(uname.value)
    this.dService.name.next(uname.value)
    this.uname = ""
    
  }

}
