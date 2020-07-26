import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  {

  switchLang!: string;

  constructor(public translate: TranslateService) {

    translate.addLangs(['en', 'pl']);
    translate.setDefaultLang('pl');
    translate.use('pl');
  }

  useLanguage(language: string) {
    this.translate.use(language);
    this.switchLang = language;
  }

  goTop() {
    window.scroll(0, 0);
  }
}
