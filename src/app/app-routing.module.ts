import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './Footers/about-us/about-us.component';
import { ContentComponent } from './content/content.component';
import { ContactComponent } from './Footers/contact/contact.component';
import { TurkeyComponent } from './our_destinations/turkey/turkey.component';
import { TurkeyOfferComponent } from './our_destinations/offer/turkey-offer/turkey-offer.component';
import { ArmeniaGeorgiaComponent } from './our_destinations/offer/armenia-georgia/armenia-georgia.component';


const routes: Routes = [
  { path: '', component: TurkeyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'content', component: ContentComponent },
  { path: 'turkey', component: TurkeyComponent },
  { path: 'turkey-offer', component: TurkeyOfferComponent },
  { path: 'armenia&georgia-offer', component: ArmeniaGeorgiaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
