import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-legume',
  templateUrl: './legume.component.html',
  styleUrls: ['./legume.component.css']
})
export class LegumeComponent implements OnInit {

  @Input('image')image:string;
  @Input('nom')nom:string;
  @Input('prix')prix:number;
  @Input('frais')frais:boolean;

  val:number;
  somme:number;
  calcprix()
  {
    this.somme=this.val*this.prix;
    
  }
  

  constructor() { }

  ngOnInit() {
  }

}
