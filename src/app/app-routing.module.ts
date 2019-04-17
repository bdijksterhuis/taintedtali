import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { PagesResolverService } from './pages/pages-resolver.service';

const routes: Routes = [
	{ path: ':page', component: PagesComponent, resolve: { content: PagesResolverService } },
	{ path: '', component: PagesComponent, resolve: { content: PagesResolverService } }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
