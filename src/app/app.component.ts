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

  @ViewChildren('list_item') listItems: QueryList<ElementRef>;

  openMenu() {
    document.body.classList.toggle('nav-open');
  }

  ngAfterViewInit() {
    this.listItems.forEach((list) => {
      (list.nativeElement as HTMLElement).addEventListener('click', () => {
        document.body.classList.remove('nav-open');
      });
    });
  }
}
