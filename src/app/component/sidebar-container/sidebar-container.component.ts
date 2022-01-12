import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatsService } from 'src/app/chats.service';

 
@Component({
  selector: 'app-sidebar-container',
  templateUrl: './sidebar-container.component.html',
  styleUrls: ['./sidebar-container.component.css']
})

export class SidebarContainerComponent implements OnInit {
  chats:any;
  constructor(private route:Router, private service:ChatsService) { 
    this.chats = service.chats;
  }

  ngOnInit(): void {
    
  }
  newRoom(chat:any){
    console.log(chat.id);
  

  }
 

}
