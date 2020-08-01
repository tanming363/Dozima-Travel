import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './Footers/about-us/about-us.component';
import { ContentComponent } from './content/content.component';
import { ContactComponent } from './Footers/contact/contact.component';
import { TurkeyComponent } from './our_destinations/turkey/turkey.component';
import { TurkeyOfferComponent } from './our_destinations/offer/turkey-offer/turkey-offer.component';
import { ArmeniaGeorgiaComponent } from './our_destinations/offer/armenia-georgia/armenia-georgia.component';
import { Otheroff1Component } from './our_destinations/offer/others/otheroff1/otheroff1.component';
import { Otheroff2Component } from './our_destinations/offer/others/otheroff2/otheroff2.component';
import { Otheroff3Component } from './our_destinations/offer/others/otheroff3/otheroff3.component';
import { Otheroff4Component } from './our_destinations/offer/others/otheroff4/otheroff4.component';
import { Otheroff5Component } from './our_destinations/offer/others/otheroff5/otheroff5.component';
import { Otheroff6Component } from './our_destinations/offer/others/otheroff6/otheroff6.component';
import { Otheroff7Component } from './our_destinations/offer/others/otheroff7/otheroff7.component';
import { Otheroff8Component } from './our_destinations/offer/others/otheroff8/otheroff8.component';
import { Otheroff9Component } from './our_destinations/offer/others/otheroff9/otheroff9.component';


const routes: Routes = [
  { path: '', redirectTo: '/turkey', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'content', component: ContentComponent },
  { path: 'turkey', component: TurkeyComponent },
  { path: 'turkey-offer', component: TurkeyOfferComponent },
  { path: 'armenia&georgia-offer', component: ArmeniaGeorgiaComponent },
  { path: 'otheroff1', component: Otheroff1Component },
  { path: 'otheroff2', component: Otheroff2Component },
  { path: 'otheroff3', component: Otheroff3Component },
  { path: 'otheroff4', component: Otheroff4Component },
  { path: 'otheroff5', component: Otheroff5Component },
  { path: 'otheroff6', component: Otheroff6Component },
  { path: 'otheroff7', component: Otheroff7Component },
  { path: 'otheroff8', component: Otheroff8Component },
  { path: 'otheroff9', component: Otheroff9Component },
  { path: '**', component: TurkeyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
