import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(public appService: AppService) { }

  selectMenu(menu) {
    this.appService.selectedMenu = menu;
  }

}
