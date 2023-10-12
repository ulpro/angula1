import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit{
  titletoadd = '';
  pricetoadd = '';
  constructor() { }
  ngOnInit(): void {
      
  }
  onsubmit(form:NgForm) {
    const newTitle = this.titletoadd;
    const newprice = this.pricetoadd;
    console.log("newtitle:" + newTitle);
    console.log("newprice:" + newprice);
  }

}
