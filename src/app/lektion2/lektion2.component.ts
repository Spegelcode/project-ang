import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthenticatedUser extends User {
  authToken: string;
}

type Vehicle = {
  make: string;
  model: string;
  year: number; 
}

type UserID = string | number;


interface Product {
    id: number;
    name: string;
    price: number;
    category: string;

  }



@Component({
  selector: 'app-lektion2',
  imports: [],
  templateUrl: './lektion2.component.html',
  styleUrl: './lektion2.component.css'
})



export class Lektion2Component {

  vehicle : Vehicle = {
    make: 'ford',
    model: 'focus',
    year: 2010
  }
  
  user : User = {
    id: 1,
    name: 'John Doe',
    email: 'email.email@email.com'
  }
  
  authenticatedUser : AuthenticatedUser = {
    id: 1,
    name: 'John Doe',
    email: 'emal@emai.email',
    authToken: '1234567890'
  }
  
  userId : UserID = 1;
  
  constructor() {
    console.log(this.vehicle);
    console.log(this.user); 
    console.log(this.authenticatedUser);
    console.log(this.userId);
  }
  

}

export class Lektion2Component2 {
  wrapInArray<T>(arg:T):T[] {
    return [arg];
  }

  constructor() {
    let wrapped2 = this.wrapInArray('helloä');
    console.log(wrapped2);
    let wrapped = this.wrapInArray(10);
    console.log(wrapped);
  }

}




class ProductCatalog<T extends Product> {
  private products: T[] = [];


  addProduct(product: T): void {
    this.products.push(product);
  }
  getProductsById(id: number): T | undefined {
    return this.products.find(product => product.id === id);
  }

  updateProduct(updateProduct: T): boolean {
    const index = this.products.findIndex(product => product.id === updateProduct.id);
    if (index !== -1) {
      this.products[index] = updateProduct;
      return true;
    }
    return false;
  }
    getAllProducts(): T[] {
      return this.products;
  }

}

const catalog = new ProductCatalog<Product>();

catalog.addProduct({ id: 1, name: 'product1', price: 100, category: 'category1' });
catalog.addProduct({ id: 2, name: 'product2', price: 200, category: 'category2' });


const productId1 = catalog.getProductsById(1);
console.log("product 1 is", productId1);



const updateProduct = { id: 1, name: 'product1', price: 150, category: 'category1' };
catalog.updateProduct(updateProduct);