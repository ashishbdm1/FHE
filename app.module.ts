import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LessonComponent } from './lesson/lesson.component';
import { GameComponent } from './game/game.component';
import { RefreshmentComponent } from './refreshment/refreshment.component';
import { LessonIdeasDetailsComponent } from './lesson/lesson-ideas-details/lesson-ideas-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LessonComponent,
    GameComponent,
    RefreshmentComponent,
    LessonIdeasDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
