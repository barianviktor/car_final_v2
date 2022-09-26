import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeNavigationComponent } from './components/home-navigation/home-navigation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchComponent } from './pages/search/search.component';
import { SearchDesignsComponent } from './components/search-designs/search-designs.component';
import { SearchMakersComponent } from './components/search-makers/search-makers.component';
import { SearchTransmissionsComponent } from './components/search-transmissions/search-transmissions.component';
import { SearchMotorsComponent } from './components/search-motors/search-motors.component';
import { SearchSeatsComponent } from './components/search-seats/search-seats.component';
import { SearchPriceComponent } from './components/search-price/search-price.component';
import { SearchModelComponent } from './components/search-model/search-model.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    HomeNavigationComponent,
    SearchComponent,
    SearchDesignsComponent,
    SearchMakersComponent,
    SearchTransmissionsComponent,
    SearchMotorsComponent,
    SearchSeatsComponent,
    SearchPriceComponent,
    SearchModelComponent,
  ],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}
