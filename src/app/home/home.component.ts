import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { CartService } from '../cart.service';
import { ShopService } from '../shop/shop.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  Product:any;
  Product2:any[]=[];
  datas:any;
  display: string="none";
  
  constructor(private router:Router, private service:CartService,private store:ShopService) { }

  ngOnInit(): void {
    this.store.getProducts().subscribe(data=>{
      this.Product=data;
      this.Product2=this.Product.slice(-5,-1);
      sessionStorage.setItem("sample",'starting');
    });
  }

  AddProdtoCart(ProductId:number):void{
    this.service.AddCart(ProductId,1000).subscribe(data=>{
      console.log("this is product data "+data);
      this.datas=data.result;
      })
  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
    window.location.reload();
    
  }

 



}


