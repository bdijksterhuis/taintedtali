import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/core/page';
import { IBlock } from '../block';

@Component({
	selector: 'app-socials',
	templateUrl: './socials.component.html',
	styleUrls: [ './socials.component.scss' ]
})
export class SocialsComponent implements IBlock, OnInit {
	@Input() currentPage: Page;
	@Input() content: any;
	constructor() {}

	ngOnInit() {
		
	}
}
