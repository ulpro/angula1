import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id;
  titre: string;
  prix: number;
  description: string;
  url: string;
  constructor(private route: ActivatedRoute, private dataservice: DataService) {
    
  }
  ngOnInit() {
    const id = this.route.snapshot.params["id"];//permet de recuperer la donnée
    this.id = id;
    this.titre = this.dataservice.getArticle(id).titre;
    this.prix = this.dataservice.getArticle(id).prix;
}
  
}
