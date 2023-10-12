import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  /*liste = [
    { id:1,
      titre: "velo",
      prix: 84,
      alternative: "",
      dispo: false,
      url: "",
      extAltImg: ""
    }, {
      id:2,
      titre: "tv",
      prix: 4,
      alternative: "",
      dispo: false,
      url: "",
      extAltImg: ""
    }
  ];*/

  liste: any = [];

  constructor( private httpClient:HttpClient) {

  }
  getArticle(id: number) {
    const articles = this.liste.find((a) => {
      return a.id === id;
    });
    return articles;
  }
  getlistfromserver() {
    return this.httpClient.get<any[]>("");
  }
}
