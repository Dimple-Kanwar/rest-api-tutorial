import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor() { }
  farmer={
    name:'A',
    email:'abc@gmail.com',
    phone:'23456787565',
    address:'Bangalore,India',
    farm:{
      farm1:['4 acres','Bangalore, India'],
      farm2:['2 acres','Bangalore, India']
    }
   
  }
  farmlist;
  farms;
 
  ngOnInit() {
    this.farmlist=Object.keys(this.farmer.farm);
    console.log(this.farmlist);
    
  
  this.farms=this.farmer.farm;
  }

}
