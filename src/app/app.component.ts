import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emails:any=[];
  addEmail(data : any){
    this.emails.push(data.value);
    console.log(data);
    console.log(data.value);


  }
  title = 'front';
}
