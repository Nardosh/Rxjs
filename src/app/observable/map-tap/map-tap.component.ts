import { Component, OnInit } from '@angular/core';
import { from, map, tap } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-map-tap',
  templateUrl: './map-tap.component.html',
  styleUrls: ['./map-tap.component.css']
})
export class MapTapComponent implements OnInit {


  users = ["Alex", "Fatima", "John", "Raj", "Rahul", "Sara", "Saurabh", "Siddharth", "Suman", "Vivek", "Vishal", "Yash"];

  constructor(public designService:DesignUtilityService) { }

  ngOnInit() {
    
    const source  = from(this.users);

    source.pipe(
      map(x => x.toUpperCase())
    
    ).subscribe(res =>{
      console.log(res);
      this.designService.print(res, "elContainer");
    
    })
    



  }

} 


