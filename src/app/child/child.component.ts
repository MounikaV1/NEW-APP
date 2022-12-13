import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { eventListeners } from '@popperjs/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Output() updateDataEvent= new EventEmitter<string>();
//@Input() item=0
  ngOnInit(): void {
  }

}
