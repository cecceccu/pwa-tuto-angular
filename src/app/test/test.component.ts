import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  locations: any;

  constructor() { }

  ngOnInit() {

    fetch('https://ghibliapi.herokuapp.com/locations?limit=10')
    .then((response) => response.json())
    .then((json) => {
      this.locations = json;
    });

  }

}
