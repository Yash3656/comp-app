import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-siblings',
  template: `
    
    <button (click)="newMessage()">New Message</button>
  `,
  styleUrls: ['./siblings.component.css']
})
export class SiblingsComponent implements OnInit {

  message:any;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  newMessage() {
    this.data.changeMessage("Hello from Sibling")
  }

}
