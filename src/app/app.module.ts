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

import { HttpClientModule } from '@angular/common/http';
import { TurkeyComponent } from './our_destinations/turkey/turkey.component';
import { ChooseCountryComponent } from './our_destinations/choose-country/choose-country.component';
import { TurkeyOfferComponent } from './our_destinations/offer/turkey-offer/turkey-offer.component';
import { ArmeniaGeorgiaComponent } from './our_destinations/offer/armenia-georgia/armenia-georgia.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

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
    ArmeniaGeorgiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
