import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WriteComponent } from './write/write.component';
import { ConnectComponent } from './connect/connect.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OptionsComponent } from './options/options.component';
import { SidebarEntryComponent } from './sidebar-entry/sidebar-entry.component';
import { SidebarChatComponent } from './sidebar-chat/sidebar-chat.component';
import { MessengerComponent } from './messenger/messenger.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WriteComponent,
    ConnectComponent,
    NavComponent,
    SidebarComponent,
    DashboardComponent,
    OptionsComponent,
    SidebarEntryComponent,
    SidebarChatComponent,
    MessengerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
