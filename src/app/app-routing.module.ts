import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { PackageComponent } from './package/package.component';
import { ResisterComponent } from './resister/resister.component';
import { TestComponent } from './test/test.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: HomeComponent,
    path: 'home'
  },
  {
    component: TestComponent,
    path: 'test'
  },
  {
    component: AboutComponent,
    path: 'about',
    children: [
      {
        component: ServiceComponent,
        path: 'service'
      }
    ]
  },
  {
    component: ServiceComponent,
    path: 'service'
  },
  {
    component: PackageComponent,
    path: 'package',
    children: [
      {
        component: ResisterComponent,
        path: 'resister'
      },
      {
        component:BookingComponent,
        path:'booking'
      }
    ]
  },
  {
    component: ContactComponent,
    path: 'contact'
  },
  {
    component: ResisterComponent,
    path: 'resister'
  },
  {
    component:BookingComponent,
    path:'booking'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
