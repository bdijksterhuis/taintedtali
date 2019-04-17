import { Injectable } from '@angular/core';
import { Page } from '../core/page';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ContentService } from '../core/content.service';
import { Observable, of, EMPTY } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class PagesResolverService implements Resolve<Page> {
	constructor(private _contentService: ContentService, private _router: Router) {}

	async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		let slug = route.paramMap.get('page') != null ? route.paramMap.get('page') : 'home';
		await this._contentService.initStore();
		let activePage = this.fetchPageBySlug(slug);
		if (typeof activePage === 'undefined') {
			this._router.navigateByUrl('/404');
		}
		return activePage;
	}

	private fetchPageBySlug(slug) {
		return this._contentService.fetchPageBySlug(slug);
	}
}
