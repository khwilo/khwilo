import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { faArrowRight, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  barsIcon = faBars;
  rightArrowIcon = faArrowRight;

  @ViewChild('navigationMenu', { static: true }) navigationMenu: ElementRef;

  constructor() {}

  ngOnInit() {}

  openMenu() {
    this.navigationMenu.nativeElement.classList.add('active');
  }

  closeMenu() {
    this.navigationMenu.nativeElement.classList.remove('active');
  }
}
