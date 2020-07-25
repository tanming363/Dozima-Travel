import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  switchLang!: string;

  constructor(public translate: TranslateService) {

    translate.addLangs(['en', 'pl']);
    translate.setDefaultLang('pl');
    translate.use('pl');
  }

  useLanguage(language: string) {
    this.translate.use(language);
    this.switchLang=language;
  }
}
