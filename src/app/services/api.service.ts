import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(public http:HttpClient){

}
getdetails(input:any){
  console.log('hikjgyjchtjh');
  
  console.log(input);
  
 return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+input+'&appid=1dbd4623517387a989b173dc879c15c6&units=metric');
}
}
