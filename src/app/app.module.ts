import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SocketClientComponent } from './client/socket-client/socket-client.component';


const routes: Routes = [
  {
    path: 'client',
    component: SocketClientComponent,
  },


  // otherwise redirect to home
  // { path: '**', redirectTo: '/login' }
];


@NgModule({
  declarations: [
    AppComponent,
    SocketClientComponent
  ],
  exports:[SocketClientComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
