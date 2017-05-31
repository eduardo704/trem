import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-programa-card',
  templateUrl: './programa-card.component.html',
  styleUrls: ['./programa-card.component.scss']
})
export class ProgramaCardComponent implements OnInit, AfterViewChecked {
  @Input() programa;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    $("span.text-content").css({
      'height': $(".image").height()
    });
  }
}
