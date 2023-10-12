import { Component ,Input ,OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{
  //titre: string = "titre";
  //prix: number = 12;
  //alternative: string = "titre alternative";
  //url: string = "http://via.placeholder.com/400*250";
  nbre: number = 0;
  comment: string = "";
  //dispo: boolean = true;
  jaime: boolean = true;
  @Input() id: number;
  @Input() titre: string;
  @Input() prix: number;
  @Input() alternative: string;
  @Input() dispo: boolean;
  @Input() url: string;
  @Input() textAltImg:string;
  @Output() info = new EventEmitter<string>();//evenement output evenement
  constructor() { }

  ngOnInit() {
  }
  OnClick() {
    if (this.jaime == true) {
      this.nbre++;
      this.info.emit(this.titre);//permet de remonter l'information au composant parent  lorsque l'evenement est declencher
      this.jaime = false;
    }
    else {
      this.nbre--;
      this.jaime = true;
    }
   
  }
  getcolor() {
    if (this.dispo == true) {
      return "green";
    }
    else {
      return "red";
    }
  }
  
}

