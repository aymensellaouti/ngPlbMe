import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
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
import { NavbarComponent } from './components/navbar/navbar.component';
import { NF404Component } from './components/nf404/nf404.component';
import { TestFormComponent } from './forms/test-form/test-form.component';
import { LoginComponent } from './auth/login/login.component';
import { TestObservableComponent } from './rxjs/test-observable/test-observable.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { authInterceptorProvider } from './auth/interceptors/auth.interceptor';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


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
    DefaultImagePipe,
    NavbarComponent,
    NF404Component,
    TestFormComponent,
    LoginComponent,
    TestObservableComponent,
    AddCvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'fr',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [authInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}

// @ => Métas données => données de description qui vont aider le compilateur à savoir quoi faire
