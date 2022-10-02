import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ColorsHomeComponent } from './pages/colors/colors-home/colors-home.component';
import { ColorsNewComponent } from './pages/colors/colors-new/colors-new.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MakersHomeComponent } from './pages/makers/makers-home/makers-home.component';
import { MakersNewComponent } from './pages/makers/makers-new/makers-new.component';
import { DesignsHomeComponent } from './pages/designs/designs-home/designs-home.component';
import { DesignsNewComponent } from './pages/designs/designs-new/designs-new.component';
import { CartypesHomeComponent } from './pages/cartypes/cartypes-home/cartypes-home.component';
import { CartypesNewComponent } from './pages/cartypes/cartypes-new/cartypes-new.component';
import { ArticleFormItemComponent } from './components/article-form-item/article-form-item.component';
import { ArticleFormListComponent } from './components/article-form-list/article-form-list.component';
import { DesignFormInputComponent } from './components/design-form-input/design-form-input.component';
import { ImagesFormListComponent } from './components/images-form-list/images-form-list.component';
import { ModelFormInputComponent } from './components/model-form-input/model-form-input.component';
import { SmartCardFormComponent } from './components/smart-card-form/smart-card-form.component';
import { SmartCardsListComponent } from './components/smart-cards-list/smart-cards-list.component';
import { SmartpointFormComponent } from './components/smartpoint-form/smartpoint-form.component';
import { CarsHomeComponent } from './pages/cars/cars-home/cars-home.component';
import { CarsNewComponent } from './pages/cars/cars-new/cars-new.component';
import { ColorsFormListComponent } from './components/colors-form-list/colors-form-list.component';
import { PriceFormInputComponent } from './components/price-form-input/price-form-input.component';
import { LicensePlateFormInputComponent } from './components/license-plate-form-input/license-plate-form-input.component';
import { CardImageComponent } from './components/card-image/card-image.component';
import { MotorFormListComponent } from './components/motor-form-list/motor-form-list.component';
import { TransmissionFormListComponent } from './components/transmission-form-list/transmission-form-list.component';
import { CartypeFormListComponent } from './components/cartype-form-list/cartype-form-list.component';
import { MotorListComponent } from './ui/motor-list/motor-list.component';
import { TransmissionListComponent } from './ui/transmission-list/transmission-list.component';
import { ListItemComponent } from './ui/list-item/list-item.component';
import { ListComponent } from './ui/list/list.component';

@NgModule({
  declarations: [
    AdminComponent,
    ColorsHomeComponent,
    ColorsNewComponent,
    NavigationComponent,
    MakersHomeComponent,
    MakersNewComponent,
    DesignsHomeComponent,
    DesignsNewComponent,
    CartypesHomeComponent,
    CartypesNewComponent,
    ArticleFormItemComponent,
    ArticleFormListComponent,
    DesignFormInputComponent,
    ImagesFormListComponent,
    ModelFormInputComponent,
    SmartCardFormComponent,
    SmartCardsListComponent,
    SmartpointFormComponent,
    CarsHomeComponent,
    CarsNewComponent,
    ColorsFormListComponent,
    PriceFormInputComponent,
    LicensePlateFormInputComponent,
    CardImageComponent,
    MotorFormListComponent,
    TransmissionFormListComponent,
    CartypeFormListComponent,
    MotorListComponent,
    TransmissionListComponent,
    ListItemComponent,
    ListComponent,
  ],
  imports: [SharedModule, AdminRoutingModule],
})
export class AdminModule {}
