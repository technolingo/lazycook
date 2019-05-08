import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() compToggled = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onToggle(compName: string) {
    this.compToggled.emit(compName);
  }
}
