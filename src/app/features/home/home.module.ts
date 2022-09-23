import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeNavigationComponent } from './components/home-navigation/home-navigation.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent, HeroComponent, HomeNavigationComponent],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}
