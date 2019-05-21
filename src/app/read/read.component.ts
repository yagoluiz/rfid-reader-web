import { Component, OnInit } from '@angular/core';

import { ReadService } from './read.service';
import { Read } from './read';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  readsMock: Read[] = [];
  reads: Read[] = [];
  
  constructor(private readService: ReadService) { }

  ngOnInit() {
    this.addReads();
  }

  addReads() : void {
    setInterval(() => {
      console.log('refresh');
      this.readService.getReads().subscribe(result => {
        this.reads = result;
      });
    }, 3000);
  }

  addReadsMock() : void {
    setInterval(() => {
      console.log('refresh');
      this.readsMock = this.readService.getReadsMock();
    }, 3000);
  }
}
