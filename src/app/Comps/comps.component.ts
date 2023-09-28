import { Component } from '@angular/core';
import { DesignUtilityService } from '../appService/design-utility.service';

@Component({
  selector: 'app-comps',
  templateUrl: './comps.component.html',
  styleUrls: ['./comps.component.css']
})
export class CompsComponent {
  name:string = "Devil";
  constructor(public dService:DesignUtilityService) { 
    this.dService.name.subscribe(res=>{
      this.name = res
    })
  }
}
