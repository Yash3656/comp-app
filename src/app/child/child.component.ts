/*import { Component, Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
      Say {{ childMessage }}
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{

  @Input() childMessage: any;

  constructor() { }

ngOnInit():void{

}
}
*/
/*
import { Component} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  message = 'Hello Akola!';

  constructor() { }

}
*/
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
      <button (click)="sendMessage()">Send Message</button>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  message: string = "Welcome to my Website!"

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  sendMessage() {
    this.messageEvent.emit(this.message)
  }
}
