import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  ],
  imports: [SharedModule, AdminRoutingModule],
})
export class AdminModule {}
