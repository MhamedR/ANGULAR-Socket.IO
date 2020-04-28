import { Component, OnInit } from '@angular/core';
import { SocketIoService } from '../../shared/socket-io.service';

@Component({
  selector: 'app-socket-client',
  templateUrl: './socket-client.component.html',
  styleUrls: ['./socket-client.component.sass']
})
export class SocketClientComponent implements OnInit {

  constructor(private socketIoService:SocketIoService) { }

  ngOnInit(): void {
    console.log("init client !! ")
   // this.socketIoService.onConnect();
  }

}
