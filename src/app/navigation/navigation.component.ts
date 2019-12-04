import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  faGithub,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  emailAddress = 'khwilowatai@gmail.com';
  GitHubLink = 'https://github.com/khwilo';
  LinkedInLink = 'www.linkedin.com/in/khwilo-watai';
  TwitterLink = 'https://twitter.com/khwilo';

  GitHubIcon = faGithub;
  LinkedinIcon = faLinkedin;
  TwitterIcon = faTwitter;

  @ViewChild('modal', { static: false })
  modal: ElementRef;

  constructor() {}

  ngOnInit() {}

  displayModal() {
    this.modal.nativeElement.style.display = 'block';
  }

  closeModal() {
    this.modal.nativeElement.style.display = 'none';
  }
}
