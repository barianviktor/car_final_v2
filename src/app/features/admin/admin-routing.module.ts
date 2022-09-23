import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CartypesHomeComponent } from './pages/cartypes/cartypes-home/cartypes-home.component';
import { CartypesNewComponent } from './pages/cartypes/cartypes-new/cartypes-new.component';
import { ColorsHomeComponent } from './pages/colors/colors-home/colors-home.component';
import { ColorsNewComponent } from './pages/colors/colors-new/colors-new.component';
import { DesignsHomeComponent } from './pages/designs/designs-home/designs-home.component';
import { DesignsNewComponent } from './pages/designs/designs-new/designs-new.component';
import { MakersHomeComponent } from './pages/makers/makers-home/makers-home.component';
import { MakersNewComponent } from './pages/makers/makers-new/makers-new.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'colors',
        component: ColorsHomeComponent,
      },
      {
        path: 'colors/new',
        component: ColorsNewComponent,
      },
      {
        path: 'makers',
        component: MakersHomeComponent,
      },
      {
        path: 'makers/new',
        component: MakersNewComponent,
      },
      {
        path: 'cartypes',
        component: CartypesHomeComponent,
      },
      {
        path: 'cartypes/new',
        component: CartypesNewComponent,
      },
      {
        path: 'designs',
        component: DesignsHomeComponent,
      },
      {
        path: 'designs/new',
        component: DesignsNewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
