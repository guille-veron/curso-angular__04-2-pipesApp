import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
nombre:string = 'Susana';
genero:string = 'femenino';
invitarloMap = {
  'masculino':'invitarlo',
  'femenino': 'invitarla'
}

clientes = ['Juan','Rosa', 'Maria'];
//clientes = [  ];
clientesMap = {
  '=0':'no tenemos ningún cliente esperando',
  '=1':'tenemos un cliente esperando',
  'other':'tenemos # clientes esperando',
};

cambiarGenero(){
  if (this.nombre === 'Jose') {
    this.nombre = 'Susana';
    this.genero = 'femenino';
  } else {
    this.nombre = 'Jose';
    this.genero = 'masculino';    
  }
}
eliminarCliente(){
  if (this.clientes.length === 0 ) { return;}

  this.clientes.pop();
}

miObservable = interval(1000);

  miPromesa = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve("tenemos data de la promesa")
    }, 3500);
  })
}
