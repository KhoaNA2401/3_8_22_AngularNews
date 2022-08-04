import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'shop', loadChildren: () => import('./pages/shop/shop.module').then(m => m.ShopModule) },
  { path: 'news', loadChildren: () => import('./pages/home/pages/news/news.module').then(m => m.NewsModule) },
  { path: 'about', loadChildren: () => import('./pages/home/pages/about/about.module').then(m => m.AboutModule) },
  { path: 'details', loadChildren: () => import('./pages/home/pages/details/details.module').then(m => m.DetailsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
