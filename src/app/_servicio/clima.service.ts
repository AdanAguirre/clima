import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  key ='bccb236d0433eb7cf283f7ac5cfd6f18';
  //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  constructor(private http: HttpClient) { }

  Clima(ciudad:string):Observable<any>{
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${this.key}`);//&mode=json&units=metric=&appid
  }

}
