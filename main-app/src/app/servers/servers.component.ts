import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false
  serverCreationStatus = 'No server was created!'
  serverName = 'Testserver'
  serverCreated = false

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 3000)
  }

  ngOnInit() { }

  onCreateServer() {
    this.serverCreated = true
    this.serverCreationStatus = 'Server was created! The name of the server is ' + this.serverName
  }
}