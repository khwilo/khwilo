import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ElementRef,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, AfterViewInit {
  logoName = 'Khwilo';

  @ViewChildren('nav_link') navigationLinks: QueryList<ElementRef>;

  openMenu() {
    document.body.classList.toggle('nav-open');
  }

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.navigationLinks.forEach((list) => {
      (list.nativeElement as HTMLElement).addEventListener('click', () => {
        document.body.classList.remove('nav-open');
      });
    });
  }
}
