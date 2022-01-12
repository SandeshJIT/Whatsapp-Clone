import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-defaultpage',
  templateUrl: './chat-defaultpage.component.html',
  styleUrls: ['./chat-defaultpage.component.css']
})
export class ChatDefaultpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Default page loaded")
  }

}
