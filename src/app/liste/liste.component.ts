import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent {
  message = "bonjour";
  liste = [
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
  ];
  constructor(private dataservice :DataService) {
   
  }
 

  onAffiche(arg: string) {
    return this.message = "Merci d'avoir voté pour l'article : " + arg;
  }
  getlist(){
    this.dataservice.getlistfromserver().subscribe(liste => { this.liste = liste });
  }
}
