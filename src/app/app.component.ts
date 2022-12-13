import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-app';
  data= "x";
 /* updateData()
  {
    this.data=Math.floor(Math.random()*10);
  } */
  userDetails=[
    {name:'Anil',email:'anil@test.com'},
    {name:'Dany',email:'dany@test.com'},
    {name:'Peter',email:'ptr@test.com'},
    {name:'Sam',email:'sam@test.com'},
    {name:'Tom',email:'tom@test.com'},
  ]
  updateData(item:string)
  {
    console.warn(item)
    this.data=item;
  }
}
 