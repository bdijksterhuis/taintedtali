import { Component, OnInit, Input } from '@angular/core';
import { IBlock } from '../block';
import { ContentService } from 'src/app/core/content.service';
import { Page } from 'src/app/core/page';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements IBlock, OnInit {
	@Input() currentPage: Page;
	@Input() content: any;
	constructor(private contentService: ContentService) {}
	ngOnInit() {
		this.setURLs();
	}

	private setURLs() {
		this.content.fields.menu.map((val) => {
			val.fields.url = val.fields.slug == 'home' ? '/' : val.fields.slug;
		});
	}
}
