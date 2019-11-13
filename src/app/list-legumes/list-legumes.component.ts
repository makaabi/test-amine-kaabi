import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-legumes',
  templateUrl: './list-legumes.component.html',
  styleUrls: ['./list-legumes.component.css']
})
export class ListLegumesComponent implements OnInit {

  datea= new Date(2019,11,12);


  tablegumes=
  [
    {image:'../assets/tomate.jpg', nom: 'tomate', prix: 2.8, frais:false},
    {image:'../assets/radis.jpg', nom: 'radis', prix: 1.8, frais:true},
    {image:'../assets/carotte.jpg', nom: 'carotte', prix: 3.8, frais:false}
  ];

  prixd:number;


  total()
  {
    s:number=0;
    for(i=0;i<2;i++)
    {
      if(s>tablegumes[i].prix)
      s++;
    }
    return s;
  }
  constructor() { }

  ngOnInit() {
  }

}
