/*
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <app-child [childMessage]="parentMessage"></app-child>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent{
  parentMessage = "message from parent"
  constructor() { }
  ngOnInit():void{

  }
}

*/
/*
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  template: `
    Message: {{ message }}
    <app-child></app-child>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {

  @ViewChild(ChildComponent) child:any;

  constructor() { }

  message:any;

  ngAfterViewInit() {
    this.message = this.child.message
  }
}
*/
/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    Message: {{message}}
    <app-child (messageEvent)="receiveMessage($event)"></app-child>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  constructor() { }

  message:any;

  receiveMessage($event:any) {
    this.message = $event
  }
}
*/
import { Component,OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-parent',
  template: `
    {{message}}
    <app-siblings></app-siblings>
  `,
  styleUrls: ['./parent.component.css']
})

export class ParentComponent {

message:any;

  constructor(private data : DataService) { }

  ngOnInit(){
    this.data.currentMessage.subscribe(message=>this.message=message);

  }
}
