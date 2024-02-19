import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Article} from '../Model/Article';
@Injectable({
  providedIn: 'root'
})


export class ApiServiceService {


  apikey:string =  "2a6e9254a53b4aaf8775319ef6619450";
  baseurl:string = "https://newsapi.org/v2/everything &apiKey=";
  constructor(private http:HttpClient) {

   }

  

   data: any;
   articles: Article[] = [];
   ngOnInit() {
    this.http.get(this.baseurl + this.apikey)
      .subscribe(
        data => {
          
        }
      )
}


}
