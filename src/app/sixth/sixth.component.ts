import { Component, OnInit, HostListener } from '@angular/core';
import { debounce } from './debounce.decorator';

@Component({
  selector: 'app-sixth',
  templateUrl: './sixth.component.html',
  styleUrls: ['./sixth.component.css']
})
export class SixthComponent implements OnInit {
  containers = [];
  @HostListener('window:scroll', ['$event'])
  @debounce()
  scrollHandler(event) {
      console.debug("Scroll Event");
      this.containers.push(this.containers.length);

  }

  constructor() { }

  ngOnInit(): void {
  }

  showAlert(message): void{
      alert(message);
  }

}
