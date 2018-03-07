import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'heavy-stuff',
  templateUrl: './heavy-stuff.component.html',
  styleUrls: ['./heavy-stuff.component.css']
})
export class HeavyStuffComponent implements OnInit {

  testArray: Array<string> = [];
  testItems: Array<number> = [];
  renderHeavy: boolean = false;

  constructor() { }

  ngOnInit() {
    for (var i = 0; i < 10000; i++) {
      this.testItems.push(i);
    }
    
    this.testArray.push(new Array(1000000).join('x'));    
  }
}
