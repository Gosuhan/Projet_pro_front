import { Component, OnInit } from '@angular/core';
import {SidenavService} from '../sidenav.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(public sideNavService: SidenavService) { }

}
