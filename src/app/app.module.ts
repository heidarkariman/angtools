import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ToolsComponent } from './tools/tools.component';
import { ToolsService } from './tools.service';
import { AppRoutingModule } from './app-routing.module';
import { DiagramsComponent } from './diagrams/diagrams.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolsComponent,
    DiagramsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    AppRoutingModule
  ],
  providers: [ToolsService],
  bootstrap: [AppComponent]
})
export class AppModule { }