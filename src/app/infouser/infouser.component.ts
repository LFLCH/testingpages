import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infouser',
  templateUrl: './infouser.component.html',
  styleUrls: ['./infouser.component.css']
})
export class InfouserComponent implements OnInit {

  ic: InfosClient | undefined;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.updateInfosClient()
  }

  updateInfosClient()
  {
    const e = this.http.get<any>('https://geolocation-db.com/json/')
    e.forEach(v =>{
      this.ic = v;
    })
  }

}
export interface InfosClient {
  country_code: string;
  country_name: string;
  city:         string;
  postal:       string;
  latitude:     number;
  longitude:    number;
  IPv4:         string;
  state:        string;
}

