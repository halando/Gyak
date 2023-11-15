import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  termekek:any
  termekekSub = new BehaviorSubject([{}])
  private downloadProducts(){
    this.http.get(this.url).subscribe(
      (a:any)=>{
        this.termekekSub.next(a)
      }
    )
    
   
    
  }
 getProducts(){
  return this.termekekSub;
 }
  constructor(private http:HttpClient) { }
this.downloadProducts()


deleteProducts(body:any){
  return this.http.delete(this.url+body.id).subscribe(
    ()=this.downloadProducts()
  )
}
updateProducts(body:any){
  return this.http.delete(this.url+body.id).subscribe(
    ()=this.downloadProducts()
  )
}
addProducts(body:any){
  return this.http.delete(this.url+body.id).subscribe(
    ()=this.downloadProducts()
  )
}
}