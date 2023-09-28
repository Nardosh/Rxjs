import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  member = [
    {name:'sai',age:20, gender:'male'},
    {name:'ram',age:30, gender:'male' },
    {name:'shiwani',age:40, gender:'female'},
    {name:'Rudhar',age:20, gender:'male'},
    {name:'shivi',age:21, gender:'female'},
   ]

   data:any
   data2:any
   data3:any

  constructor() { }

  ngOnInit()
  {


 const source = from(this.member);
 source.pipe(
  filter(member => member.name.length >=5),
  toArray()
  )
 .subscribe(x =>{
  console.log(x)
  this.data = x;

 } ); 
 

 source.pipe(
  filter(member => member.age > 20),
  toArray()
  )
 .subscribe(x =>{
  console.log(x)
  this.data2 = x;

 } ); 

 source.pipe(
  filter(member => member.gender == 'female'),
  toArray()
  )
 .subscribe(x =>{
  console.log(x)
  this.data3 = x;

 } ); 
 


   




  }
 
}
