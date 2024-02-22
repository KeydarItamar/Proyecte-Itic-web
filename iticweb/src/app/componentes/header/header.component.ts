import { Component, OnInit} from '@angular/core';
import { Menu } from 'src/app/models/menu-header';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

Menu = Menu

  constructor() {
    
 }

  ngOnInit(): void {
  }
  

}