import { Component, OnInit, Input } from '@angular/core';
import { IBlock } from '../block';
import { Page } from 'src/app/core/page';

@Component({
	selector: 'app-quote',
	templateUrl: './quote.component.html',
	styleUrls: [ './quote.component.scss' ]
})
export class QuoteComponent implements IBlock, OnInit {
	@Input() currentPage: Page;
	@Input() content: any;
	constructor() {}
	ngOnInit() {}
}
