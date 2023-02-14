 export class Product{
    private _name:string;
    private _price:number;

    constructor(name: string, price: number) {
        this._name = name;
        this._price = price;
    }

    getname(): string {
        return this._name;
    }

    setname(name: string):void {
        this._name = name;
    }

    getprice(): number {
        return this._price;
    }

    setprice(price: number) {
        this._price = price;
    }
}