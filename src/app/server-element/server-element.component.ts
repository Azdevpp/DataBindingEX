import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input() element: { type: string; name: string; content: string; };
  // @Input('or') element: { type: string; name: string; content: string; };//To oath argument to the input
  constructor() {
   }

  ngOnInit(): void {
  }

}
