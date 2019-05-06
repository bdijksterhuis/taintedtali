import { Component, OnInit, Input, Injector, ViewChild, TemplateRef } from '@angular/core';
import { IBlock } from '../block';
import { Page } from 'src/app/core/page';
import { ContentService } from 'src/app/core/content.service';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: [ './content.component.scss' ]
})
export class ContentComponent implements IBlock, OnInit {
	@Input() currentPage: Page;
	@Input() content: any;

	@ViewChild('1') one: TemplateRef<any>;
	@ViewChild('2') two: TemplateRef<any>;
	@ViewChild('3') three: TemplateRef<any>;
	@ViewChild('4') four: TemplateRef<any>;

	public contentType: string;
	public template;
	public context: {};
	constructor(private _contentService: ContentService) {}
	ngOnInit() {
		this.getTemplate();
		console.log(this.content);
	}

	public getContentType() {
		let entry = this._contentService.getEntryById(this.content.id);
		this.contentType = entry.sys.contentType.sys.id;
		return this.contentType;
	}

	public alignImage(): String {
		return this.content.fields.displayImage === true ? 'right' : 'left';
	}

	public getTemplate() {
		switch (this.getContentType()) {
			case 'contentSingleColumn':
				this.template = this.one;
				break;
			case 'contentSingleColumnImage':
				this.template = this.alignImage() === 'right' ? this.three : this.two;
				break;
			case 'contentThreeColumn':
				this.template = this.four;
				break;
		}
	}
}
