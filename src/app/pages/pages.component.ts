import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ContentService } from '../core/content.service';
import { Page } from '../core/page';

@Component({
	selector: 'app-pages',
	templateUrl: './pages.component.html',
	styleUrls: [ './pages.component.scss' ]
})
export class PagesComponent implements OnInit {
	public activePage: Page;
	constructor(private _router: Router, private _route: ActivatedRoute, private _contentService: ContentService) {}

	ngOnInit() {
		this._route.data.subscribe((data) => {
			this.activePage = data.content;
		});
	}
}
