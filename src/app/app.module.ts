import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainContainerComponent } from './component/main-container/main-container.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { SidebarContainerComponent } from './component/sidebar-container/sidebar-container.component';
import { ChatAreaComponent } from './component/main-container/chat-area/chat-area.component';
import { ChatDefaultpageComponent } from './component/main-container/chat-area/chat-defaultpage/chat-defaultpage.component';
import { ChatRoomComponent } from './component/main-container/chat-area/chat-room/chat-room.component';
import { MaterialModule } from './shared/material.module';
import { LoginPageComponent } from './component/login-page/login-page.component';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';


@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    SidebarComponent,
    SidebarContainerComponent,
    ChatAreaComponent,
    ChatDefaultpageComponent,
    ChatRoomComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatMenuModule,
    FormsModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule

    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
