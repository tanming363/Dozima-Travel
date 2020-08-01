import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './Footers/about-us/about-us.component';
import { ContactComponent } from './Footers/contact/contact.component';
import { FooterComponent } from './Footers/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentComponent } from './content/content.component';
import { TurkeyComponent } from './our_destinations/turkey/turkey.component';
import { ChooseCountryComponent } from './our_destinations/choose-country/choose-country.component';
import { TurkeyOfferComponent } from './our_destinations/offer/turkey-offer/turkey-offer.component';
import { ArmeniaGeorgiaComponent } from './our_destinations/offer/armenia-georgia/armenia-georgia.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OthersComponent } from './our_destinations/offer/others/others.component';
import { Otheroff1Component } from './our_destinations/offer/others/otheroff1/otheroff1.component';
import { Otheroff2Component } from './our_destinations/offer/others/otheroff2/otheroff2.component';
import { Otheroff3Component } from './our_destinations/offer/others/otheroff3/otheroff3.component';
import { Otheroff4Component } from './our_destinations/offer/others/otheroff4/otheroff4.component';
import { Otheroff5Component } from './our_destinations/offer/others/otheroff5/otheroff5.component';
import { Otheroff6Component } from './our_destinations/offer/others/otheroff6/otheroff6.component';
import { Otheroff7Component } from './our_destinations/offer/others/otheroff7/otheroff7.component';
import { Otheroff8Component } from './our_destinations/offer/others/otheroff8/otheroff8.component';
import { Otheroff9Component } from './our_destinations/offer/others/otheroff9/otheroff9.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    ContactComponent,
    FooterComponent,
    ContentComponent,
    TurkeyComponent,
    ChooseCountryComponent,
    TurkeyOfferComponent,
    ArmeniaGeorgiaComponent,
    OthersComponent,
    Otheroff1Component,
    Otheroff2Component,
    Otheroff3Component,
    Otheroff4Component,
    Otheroff5Component,
    Otheroff6Component,
    Otheroff7Component,
    Otheroff8Component,
    Otheroff9Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }


// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}