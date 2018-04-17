import { Component, ViewChild, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Simplon\'click';

  constructor (public appService: AppService) {

  }

  ngOnInit() {
  }

  selectMenu(menu) {
    this.appService.selectedMenu = menu;
  }
}
