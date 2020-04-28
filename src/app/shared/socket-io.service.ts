import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {

  // 
  // socket = io('http://localhost');

  private socket: SocketIOClient.Socket;


  constructor() { }

  public initSocket() {
    this.socket = socketIo('ws://localhost:90');
    this.socket.on('connect', function () {
      console.log("connected !! ")
    })


  }


  getMessage() {
   // let observable = new Observable(observer => {
      this.socket.on('msgToClient', (data) => {
      console.log("on message ")

    //  this.socket.emit('EventsGateway', { name: 'Nest' },data => console.log("DATaaaaaaaaaaaaaaaaaaaaaa:",data));

        console.log(data)

       // observer.next(data);
      });

     
    //});
   // return observable;
  }

}
