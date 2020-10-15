import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { OrdersService } from '../shared/orders.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  constructor(private ordersService: OrdersService) {}

  coffees = [
    'Americano',
    'Flat White',
    'Cappuccino',
    'Latte',
    'Espresso',
    'Machiato',
    'Mocha',
    'Hot Chocolate',
    'Čaj'
  ];

  coffeeOrder = [];
  // const nums = ('1', '2', '3');

  ngOnInit() {
 // emit (1,2,3,4,5)
const source1 = from([1, 2, 3, 4, 5]);
 // add 10 to each value
const example1 = source1.pipe(map(val => val + 10));
 // output: 11,12,13,14,15
const subscribe1 = example1.subscribe(val => console.log(val));

// emit ({name: 'Joe', age: 30}, {name: 'Frank', age: 20},{name: 'Ryan', age: 50})
  const source = from([
    { name: 'Joe', age: 30 },
    { name: 'Frank', age: 20 },
    { name: 'Ryan', age: 50 }
  ]);
  // grab each persons name, could also use pluck for this scenario
  const example = source.pipe(map(({ name, age }) => name + ' '  + 'slon' + ' ' + age));
  // output: "Joe","Frank","Ryan"
  const subscribe = example.subscribe(val => console.log(val));


  }

  // addCoffee = coffee => this.coffeeOrder.push(coffee);
  addCoffee(coffee) {
    this.coffeeOrder.push(coffee);



  }
  removeCoffee (coffee) {
    const index = this.coffeeOrder.indexOf(coffee);
    if (index > -1) {this.coffeeOrder.splice(index, 1); }
  }

  onSubmit() {
    this.ordersService.form.value.coffeeOrder = this.coffeeOrder;
    const data = this.ordersService.form.value;

    this.ordersService.createCoffeeOrder(data).then(res => {
      /*do something here....maybe clear the form or give a success message*/
    });
  }
}
