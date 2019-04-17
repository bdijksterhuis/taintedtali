import { Component, OnInit, Input } from '@angular/core';
import { IBlock } from '../block';
import { ContentService } from 'src/app/core/content.service';
import { Page } from 'src/app/core/page';

@Component({
	selector: 'app-breadcrumbs',
	templateUrl: './breadcrumbs.component.html',
	styleUrls: [ './breadcrumbs.component.scss' ]
})
export class BreadcrumbsComponent implements IBlock, OnInit {
	@Input() currentPage: Page;
	@Input() content: any;
	public rootPage: Page;
	constructor(private _contentService: ContentService) {}
	ngOnInit() {
		this.rootPage = this._contentService.fetchRootPage();
	}
}
