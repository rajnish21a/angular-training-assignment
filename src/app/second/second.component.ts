import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  displayMode:number;
  constructor() { }

  ngOnInit(): void {
  }

  onDisplayModeChange(mode: number): void {
      this.displayMode = mode;
  }

}
