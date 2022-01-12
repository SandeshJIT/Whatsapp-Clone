import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { ChatDefaultpageComponent } from './component/main-container/chat-area/chat-defaultpage/chat-defaultpage.component';
import { ChatRoomComponent } from './component/main-container/chat-area/chat-room/chat-room.component';
import { MainContainerComponent } from './component/main-container/main-container.component';
import { ChatGuardGuard } from './gurad/chat-guard.guard';

const routes: Routes = [
  {
    path : '', component:MainContainerComponent ,
    children : [
      {
      path : 'room/:id' , component : ChatRoomComponent
      },
      {
        path : '' , component : ChatDefaultpageComponent
      }
     
     
    ],
    canActivate:[ChatGuardGuard]
  },
  {
    path : 'loginpage', component : LoginPageComponent
  }
    
  
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
