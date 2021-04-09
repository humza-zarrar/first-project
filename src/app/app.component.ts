import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-project';
  currentVal=""
  name="angular name"
  disableboxes= true
  show= "blue"
  color="yellow"
  data= [
    {
      name: 'Humza',
      age: 30,
      email: "example@example.com",
      number: "090078601"
    },
    {
      name: 'Nauman',
      age: 31,
      email: "example@example.com",
      number: "090078601"
    },
    {
      name: 'Zain',
      age: 32,
      email: "example@example.com",
      number: "090078601"
    },
    {
      name: 'Adnan',
      age: 33,
      email: "example@example.com",
      number: "090078601"
    },
    {
      name: 'Usman',
      age: 34,
      email: "example@example.com",
      number: "090078601"
    }
  ]

  getName()
  {
    alert('Humza Zarrar')
  }

  myEvent(evt: any)
  {
    console.warn(evt)
  }

  getVal(val: any)
  {
    console.warn(val)
    this.currentVal=val
  }

  enableBoxes()
  {
    this.disableboxes=false
  }

  getUserValue(value: any)
  {
    console.warn(value)
  }
}
