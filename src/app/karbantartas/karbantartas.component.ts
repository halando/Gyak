import { Component } from '@angular/core';
import {icons } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-karbantartas',
  templateUrl: './karbantartas.component.html',
  styleUrls: ['./karbantartas.component.css']
})
export class KarbantartasComponent {
  products:any
  constructor(private base:BaseService){
    this.base.getProducts().subscribe(
      (adatok)=>this.products=adatok 
    )

    short(key:any,type:any){

    }
  }
}
