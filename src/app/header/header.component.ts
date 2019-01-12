import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public selectedFeature = new EventEmitter() ;
  public show = false;

  constructor() { }

  ngOnInit() {
  }

  onSelected(feature) {
    this.selectedFeature.emit(feature);
  }
  showClass() {
    this.show = !this.show;
    console.log(this.show);
  }

}
