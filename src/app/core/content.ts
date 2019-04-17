import { Injectable } from '@angular/core';
import { Block, BlockAdapter } from '../blocks/block';
import { Adapter } from './adapter';

export class Content {
	constructor(public id: string, public name: string, public type: Block, public fields: Array<any>) {}
}

@Injectable({
	providedIn: 'root'
})
export class ContentAdapter implements Adapter<Content> {
	constructor(private blockAdapter: BlockAdapter) {}
	adapt(item: any): Content {
		return new Content(item.sys.id, item.fields.name, this.blockAdapter.adapt(item.fields.type), item.fields);
	}
}
