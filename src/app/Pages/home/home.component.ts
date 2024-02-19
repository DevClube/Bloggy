import { Component } from '@angular/core';
import { Article } from '../../Model/Article';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../../Service/api-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {



  constructor(private apiservice:ApiServiceService){

  }





  
  
  

  articles!: Article[];


}
