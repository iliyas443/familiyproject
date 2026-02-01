import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthUsersComponent } from './pages/auth-users/auth-users.component';
import { FamilyUsersComponent } from './pages/family-users/family-users.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth-users', component: AuthUsersComponent },
  { path: 'family-users', component: FamilyUsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
