import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { Content, ContentAdapter } from './content';

export class Page {
	constructor(
		public id: string,
		public name: string,
		public navTitle: string,
		public pageTitle: string,
		public slug: string,
		public isRoot: boolean,
		public content: Array<Content>
	) {}
}

@Injectable({
	providedIn: 'root'
})
export class PageAdapter implements Adapter<Page> {
	constructor(private contentAdapter: ContentAdapter) {}
	adapt(item: any): Page {
		let i = item.fields;
		return new Page(item.sys.id, i.name, i.navTitle, i.pageTitle, i.slug, i.isRoot, i.content.map((c) => this.contentAdapter.adapt(c)));
	}
}
