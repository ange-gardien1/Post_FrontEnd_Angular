export class Coffee {
    coffeeId?: string;
    name?: string;
    description?: string;
    price?: number;

    constructor(id?: string, name?: string, description?: string, price?: number) {
        this.coffeeId = id;
        this.name = name;
        this.description = description;
        this.price = price;
      }
}
