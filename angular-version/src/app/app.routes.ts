import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServerComponent } from './pages/server/server.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'L2Prestige x15 Interlude - Home' },
  { path: 'server', component: ServerComponent, title: 'L2Prestige x15 Interlude - Server' },
  { path: 'login', component: LoginComponent, title: 'L2Prestige x15 Interlude - Login' },
  { path: 'register', component: RegisterComponent, title: 'L2Prestige x15 Interlude - Register' },
  { path: '**', redirectTo: '/home' }
];
