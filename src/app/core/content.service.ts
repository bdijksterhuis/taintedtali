import { Injectable, OnInit } from '@angular/core';
import * as contenful from 'contentful';
import { environment } from '../../environments/environment';
import { Page, PageAdapter } from './page';
import { Entry } from 'contentful';

@Injectable({
	providedIn: 'root'
})
export class ContentService implements OnInit {
	private _pages;

	// -- Set up contentful
	private _client = contenful.createClient({
		space: environment.contentful.spaceId,
		accessToken: environment.contentful.token
	});
	private _store: Page[];
	private _entries: Entry<{}>[];

	constructor(private pageAdapter: PageAdapter) {}
	ngOnInit() {}

	/**
	 * fetchAllContent
	 */
	public fetchAllContent(): Page[] {
		return this.getStore();
	}

	public fetchPageBySlug(slug: string): Page {
		return this.getStore().find((v) => v.slug === slug);
	}

	public fetchRootPage(): Page {
		return this.getStore().find((v) => v.isRoot === true);
	}

	public getEntryById(id: string): Entry<{}> {
		return this.getEntries().find((v) => v.sys.id == id);
	}

	public getStore() {
		return this._store;
	}

	public getEntries() {
		return this._entries;
	}

	public initStore() {
		return this._queryEndpoint();
	}

	/**
	 * _queryEndpoint()
	 * Consume the contentful API and get all of our content in 1 go
	 * @returns Promise<Page[]>
	 */
	private async _queryEndpoint(): Promise<Page[]> {
		if (this._store === undefined) {
			let p = await this._client.getEntries();
			this._entries = p.items;
			this._store = p.items.filter((val) => val.sys.contentType.sys.id == environment.contentful.pageContentType).map((p) => this.pageAdapter.adapt(p));
		}
		return this._store;
	}
}
