import { Component, Input,OnInit} from '@angular/core';

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
