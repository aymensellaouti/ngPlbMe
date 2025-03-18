import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { FormsModule } from '@angular/forms';
import { RotatingCardComponent } from './components/rotating-card/rotating-card.component';
import { PereComponent } from './communicationInterComposants/pere/pere.component';
import { FilsComponent } from './communicationInterComposants/fils/fils.component';
import { SommeComponent } from './communicationInterComposants/somme/somme.component';
import { CvComponent } from './cv/cv/cv.component';
import { CvListComponent } from './cv/cv-list/cv-list.component';
import { CvItemComponent } from './cv/cv-item/cv-item.component';
import { CvCardComponent } from './cv/cv-card/cv-card.component';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { WeekTodoComponent } from './todo/week-todo/week-todo.component';
import { ExempleNgStyleComponent } from './directives/exemple-ng-style/exemple-ng-style.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { ExempleNgClassComponent } from './directives/exemple-ng-class/exemple-ng-class.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { DefaultImagePipe } from './pipe/default-image.pipe';
import { SayHelloService } from './services/say-hello.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    RotatingCardComponent,
    PereComponent,
    FilsComponent,
    SommeComponent,
    CvComponent,
    CvListComponent,
    CvItemComponent,
    CvCardComponent,
    EmbaucheComponent,
    DetailsCvComponent,
    TodoComponent,
    WeekTodoComponent,
    ExempleNgStyleComponent,
    MiniWordComponent,
    ExempleNgClassComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// @ => Métas données => données de description qui vont aider le compilateur à savoir quoi faire
