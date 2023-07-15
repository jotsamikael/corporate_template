import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  selected: number = 5;

  constructor() { }

  ngOnInit(): void {
  }

  onChangePage(select: number){
    this.selected = select;
  }

}
