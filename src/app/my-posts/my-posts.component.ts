import { Component, OnInit } from '@angular/core';

import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {
  penIcon = faPen;

  constructor() {}

  ngOnInit() {}
}
