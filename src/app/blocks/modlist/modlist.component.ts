import { Component, OnInit, Input } from '@angular/core';
import { IBlock } from '../block';
import { Page } from 'src/app/core/page';

@Component({
	selector: 'app-modlist',
	templateUrl: './modlist.component.html',
	styleUrls: [ './modlist.component.scss' ]
})
export class ModlistComponent implements IBlock, OnInit {
	@Input() currentPage: Page;
	@Input() content: any;
	constructor() {}
	ngOnInit() {
		this.getModIDs();
		console.log(this.content);
	}

	private getModIDs() {
		return this.content.fields.mods.map((mod, index) => {
			mod.fields.active = index == 0;
			mod.fields.tabId = `vpills-${mod.fields.name.toLowerCase()}`;
			mod.fields.tabPanelId = `vtab-${mod.fields.name.toLowerCase()}`;
		});
	}
}
