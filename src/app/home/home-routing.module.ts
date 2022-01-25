import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { UserPage } from '../user/user.page';

const routes: Routes = [
  {path: '', component: HomePage},
  {path: 'user', component: UserPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
