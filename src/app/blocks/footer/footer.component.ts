import { Component, OnInit, Input } from '@angular/core';
import { IBlock } from '../block';
import { Page } from 'src/app/core/page';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: [ './footer.component.scss' ]
})
export class FooterComponent implements IBlock, OnInit {
	@Input() currentPage: Page;
	@Input() content: any;
	constructor() {}
	ngOnInit() {}
}
