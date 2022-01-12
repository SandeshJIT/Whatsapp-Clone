import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor() { }
  chats = [
    {
      id:1,
      name:"Sandesh",
      messages:"Hey how are u",
      time:"7.04 pm",
    },
    {
      id:2,
      name:"Ramya",
      messages:"Doing good",
      time:"7.04 pm"

    },
    {
      id:3,
      name:"Paru",
      messages:"Wru?",
      time:"7.04 pm"
    }
   
  ]
}
