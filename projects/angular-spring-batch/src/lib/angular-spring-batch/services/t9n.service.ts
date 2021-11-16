import {Injectable, OnDestroy} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import frT9n from '../i18n/fr.json';
import enT9n from '../i18n/en.json';
import deT9n from '../i18n/de.json';
import {Subject} from 'rxjs';


@Injectable({providedIn: 'root'})
export class T9nService implements OnDestroy {
  readonly i18nMap = new Map<string, any>([
    ['en', enT9n.angularSpringBatch],
    ['fr', frT9n.angularSpringBatch],
    ['de', deT9n.angularSpringBatch]
  ]);
  private t9nNamespace = 'angularSpringBatch';
  private readonly defaultLang = 'fr';
  private readonly defaultT9n: typeof frT9n = this.i18nMap.get(this.defaultLang);
  private readonly testT9nKey = 'angular-spring-batch.main.jobs';
  private readonly onDestroy$ = new Subject<void>();

  constructor(private translate: TranslateService) {
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  setup(): void {
    this.translate.onLangChange.subscribe(event => {
      if (event.translations && !event.translations[this.t9nNamespace]) {
        event.translations[this.t9nNamespace] = this.i18nMap.get(event.lang) ?? this.defaultT9n;
      }
    });
  }
}
