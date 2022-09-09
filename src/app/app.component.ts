import { Component,OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http"
import { Observable } from 'rxjs';
import {Emotion} from "./Model/emotion"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  url:string="https://jsonplaceholder.typicode.com/todos/";
  emotionsArray:any;
  constructor(private http:HttpClient){
  }

  ngOnInit(){
    this.getData().subscribe(data=>{
      console.log(data);
      this.emotionsArray=data
    })
  }

  getData():Observable<any>{
    return this.http.get<any>(this.url);
  }
}
