import { Component } from '@angular/core';
import {UsersDataService} from './users-data.service'

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'success',
    message: 'This is an success alert',
  }, {
    type: 'info',
    message: 'This is an info alert',
  }, {
    type: 'warning',
    message: 'This is a warning alert',
  }, {
    type: 'danger',
    message: 'This is a danger alert',
  }, {
    type: 'primary',
    message: 'This is a primary alert',
  }, {
    type: 'secondary',
    message: 'This is a secondary alert',
  }, {
    type: 'light',
    message: 'This is a light alert',
  }, {
    type: 'dark',
    message: 'This is a dark alert',
  }
];


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

  updateColor() {
    this.color="purple"
  }

  alerts: Alert[] = [];

  constructor(private user:UsersDataService ) {
    this.reset();
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

  model = {
    left: true,
    middle: false,
    right: false
  };

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  child= [
    {
      name: 'Humza',
        age: 30,
        city: 'lahore'
    },
    {
      name: 'Nadeem',
        age: 28,
        city: 'lahore'
    },
    {
      name: 'Zain',
        age: 25,
        city: 'lahore'
    }
  ]

  fullname="humza zarrar"
  today=Date.now()
  str="angular pipe"
  val="20"

}
