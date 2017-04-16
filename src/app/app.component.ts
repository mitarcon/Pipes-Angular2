import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name:string = "Robert";
  array:number[] = [1,2,3,4,5,6,7,8,9,0];
  pi: number = Math.PI;
  numero: number = 0.2345;
  salary: number = 12345.2;
  heroe: any = {
    nombre: "Wolverine",
    edad: 500,
    direccion: {
      calle: 815,
      casa: "casa X"
    }
  };
  promiseValue = new Promise ( ( resolve, reject ) => {

    setTimeout( () => resolve( 'llego la data' ), 3500 );
  });
}
