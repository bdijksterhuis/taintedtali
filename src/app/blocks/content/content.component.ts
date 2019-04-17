import { Component, OnInit, Input } from '@angular/core';
import { IBlock } from '../block';
import { Page } from 'src/app/core/page';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: [ './content.component.scss' ]
})
export class ContentComponent implements IBlock, OnInit {
	@Input() currentPage: Page;
	@Input() content: any;
	constructor() {}
	ngOnInit() {}
}
