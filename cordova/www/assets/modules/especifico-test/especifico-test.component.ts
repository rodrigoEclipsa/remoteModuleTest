import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-especifico-test',
  templateUrl: './especifico-test.component.html',
  styleUrls: ['./especifico-test.component.css']
})
export class EspecificoTestComponent implements OnInit {

  constructor() { }
  title:string = 'esto es un modulo';

  count:number = 0;
  ngOnInit() {
  }

  test()
  {
    //navigator.notification.alert(message, alertCallback, [title], [buttonName])

    this.count++;


  }

}
