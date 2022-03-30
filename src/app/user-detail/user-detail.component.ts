import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  Users = {
    firstname:"bamba",
    lastname:"awsome",
    Username:"melahMaim",
    password:"melahCola",
  }
  isSpecial:boolean = true;
   
  
  currentStyles = {};
  canSave:boolean = true;

  myClasses:any = {
    amazing:'',
    wow:''
  }
  

  constructor() {
    this.SetCurrentStyles();
    this.SetmyClasses();
    
   }
   SetmyClasses(){
    this.myClasses = {
      wow:true,
      amazing:false,
    }
   }
   SetCurrentStyles(){
     this.currentStyles = {
       'font-style' : this.canSave ? 'italic' : 'normal',
       'font-size' : this.isSpecial ? '24px' : '12px',
     }
   }

  ngOnInit(): void {
  }

}
