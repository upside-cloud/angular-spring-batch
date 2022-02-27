import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SpringBatchModule} from '../../projects/angular-spring-batch/src/public_api';
import {AppComponent} from './app.component';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

@NgModule({
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SpringBatchModule,
    TranslateModule.forRoot()
  ],
})
export class AppModule {
  constructor(translate: TranslateService) {
    translate.use('fr');
  }
}
