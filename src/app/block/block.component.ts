import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Content } from 'src/app/core/content';
import { BlockDirective } from '../block.directive';
import { IBlock } from '../blocks/block';
import { Page } from '../core/page';

@Component({
	selector: 'app-block',
	templateUrl: './block.component.html',
	styleUrls: [ './block.component.scss' ]
})
export class BlockComponent implements OnInit {
	@Input() currentPage: Page;
	@Input() content: Content;
	@ViewChild(BlockDirective) blockDirective: BlockDirective; // Directive for where to place the block

	constructor() {}

	ngOnInit() {
		this.loadBlock();
	}

	private loadBlock() {
		let vcRef = this.blockDirective.viewContainerRef;
		vcRef.clear();

		let cRef = vcRef.createComponent(this.content.type.component);
		(<IBlock>cRef.instance).content = this.content;
		(<IBlock>cRef.instance).currentPage = this.currentPage;
	}
}
