import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/_servicio/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ciudad='';
  Temperatura=0;
  Humedad=0;
  Temperatura_Max=0;
  constructor(private climaService: ClimaService) { }

  ngOnInit(): void {
  }

mostrarClima(){
      this.climaService.Clima(this.ciudad).subscribe (data => {
        this.Temperatura = data.main.temp;
        this.Humedad = data.main.humidity;   
        this.Temperatura_Max = data.main.temp_max;
      });
    }
  

}
