import {
  Component,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'khwilo';

  @ViewChildren('nav_link') navigationLinks: QueryList<ElementRef>;

  openMenu() {
    document.body.classList.toggle('nav-open');
  }

  ngAfterViewInit() {
    this.navigationLinks.forEach((list) => {
      (list.nativeElement as HTMLElement).addEventListener('click', () => {
        document.body.classList.remove('nav-open');
      });
    });
  }
}
