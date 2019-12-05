import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  emailAddress = 'khwilowatai@gmail.com';
  GitHubLink = 'https://github.com/khwilo';
  LinkedInLink = 'https://www.linkedin.com/in/khwilo-watai';
  TwitterLink = 'https://twitter.com/khwilo';
  WhatsappLink = 'https://api.whatsapp.com/send?phone=+254718802061';

  GitHubIcon = faGithub;
  LinkedinIcon = faLinkedin;
  TwitterIcon = faTwitter;
  WhatsappIcon = faWhatsapp;

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
