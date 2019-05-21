import { Component, OnInit } from '@angular/core';

import { Log } from './log';
import { LogService } from './log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  logsMock: Log[] = [];
  logs: Log[] = [];

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.addLogs();
  }

  addLogs() : void {
    setInterval(() => {
      console.log('refresh');
      this.logService.getLogs().subscribe(result => {
        this.logs = result;
      });
    }, 3000);
  }

  addLogsMock() : void {
    setInterval(() => {
      console.log('refresh');
      this.logsMock = this.logService.getLogsMock();
    }, 3000);
  }
}
