import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/core/page';
import { IBlock } from '../block';

@Component({
	selector: 'app-emotes',
	templateUrl: './emotes.component.html',
	styleUrls: [ './emotes.component.scss' ]
})
export class EmotesComponent implements IBlock, OnInit {
	@Input() currentPage: Page;
	@Input() content: any;
	constructor() {}

	ngOnInit() {}
}
