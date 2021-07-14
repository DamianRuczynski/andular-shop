import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() subpageSelected = new EventEmitter<string>();
  onClick(subpage: string) {
    this.subpageSelected.emit(subpage);
  }
}
