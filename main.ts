import {productmanager} from "./QLY_TH3";
import {Product} from "./BAI3";
let laptop=new Product("laptop",20000);
let phone=new Product("samsung",50000);
let produtmanager1=new productmanager();
produtmanager1.add=laptop;
produtmanager1.add=phone;
console.log(produtmanager1.All);
