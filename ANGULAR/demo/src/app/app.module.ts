import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { LoggingService } from './logging.service';
import { ThirdComponent } from './third/third.component';
import { DbconService } from './dbcon.service';
import { RamComponent } from './ram/ram.component';
import { ShamComponent } from './sham/sham.component';
import { ChatService } from './chat.service';
import { GhanshamComponent } from './ghansham/ghansham.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    RamComponent,
    ShamComponent,
    GhanshamComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoggingService, DbconService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
