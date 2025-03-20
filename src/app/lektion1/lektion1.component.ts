import { Component } from '@angular/core';

@Component({
  selector: 'app-lektion1',
  imports: [],
  templateUrl: './lektion1.component.html',
  styleUrl: './lektion1.component.css'
}) 
  export interface User {
    name: string;
    age: number;
  }

  export interface Item {
    name: string;
    value: number;
  }
  


export class Lektion1Component {
  
  public width: number = 100;
  public height: number = 100;
  public items: Item[] = [
    {name: 'item1', value: 1},
    {name: 'item2', value: 2},
    {name: 'item3', value: 3}
  ];

  public calculateArea(width: number, height: number): number {
    return width*height;
  }
  public createUser(name: string, age: number): {name: string; age: number} {
    return { name: name, age: age};
  }
  

  public createUser2(name: string, age: number): User {
    return { name: name, age: age};
  }

  public addItems(items: Item[], item: Item): Item[] {
    items.push(item);
    return items;
  }


  public handelResponse(statusCode: HttpStatusCode) {
    if (statusCode === StatusCode.Success) {
      console.log('Status OK');
    } else if (statusCode === StatusCode.Notfound) {
      console.log('Status Error');

}

export enum HttpStatusCode {
  Success = 200,
  Notfound = 404
}






  export enum HttpStatusCode {
    Success = 200,
    NotFound = 404
  }

  public handelResponse(statusCode: HttpStatusCode): void {
    if (statusCode === HttpStatusCode.Success) {
      console.log('fuck yeh');
    }else if (statusCode === HttpStatusCode.NotFound)
      console.log('Where am i ?');
}
}




handleResponse(HttpStatusCode.Success);