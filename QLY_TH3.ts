import {Product} from "./BAI3";

export class productmanager{
    private product:any[]=[];
    constructor() {
    }

    get All(){
        return this.product;
    }
    set add(product:Product){
        this.product.push(product);
    }

}