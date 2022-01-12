import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.css']
})
export class ChatAreaComponent implements OnInit {
  name: any;
  constructor() { this.name = "Sandesh";}
  
  ngOnInit(): void {
  }
  onMessageSent(form:any){
    console.log(form)
}
}
