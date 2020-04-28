import { Component, OnInit } from '@angular/core';
import { SocketIoService } from './shared/socket-io.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'angular-socket-io';
  constructor(private socketIoService: SocketIoService) { }
  ngOnInit(): void {
    console.log("init client !! ")
     this.socketIoService.initSocket();
     this.socketIoService.getMessage();
  }
}
