import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumlistComponent } from './albumlist/albumlist.component';
import { AlbumdetailComponent } from './albumdetail/albumdetail.component';
import { AlbumphotosComponent } from './albumphotos/albumphotos.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About page',
  },
  {
    path: 'albums',
    component: AlbumlistComponent,
    title: 'Albums',
  },
  {
    path: 'albums/:id',
    component: AlbumdetailComponent,
    title: 'Album detail',
  },
  {
    path: 'albums/:id/photos',
    component: AlbumphotosComponent,
    title: 'Album photos',
  },
];
