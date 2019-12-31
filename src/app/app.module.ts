import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProjectsComponent } from './projects/projects.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, ProjectsComponent, NotFoundComponent, IntroComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
