import { Injectable } from '@angular/core';
import * as contenful from 'contentful';
import { environment } from '../environments/environment';
import { from } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ContentfulService {
	private _client = contenful.createClient({
		space: environment.contentful.spaceId,
		accessToken: environment.contentful.token
	});

	private _entries;

	constructor() {}

	async retrieveAllPages(query: object = {}) {
		this._entries = this._client.getEntries(query);
		console.log(this._entries);
		return this._entries;
	}

	// setStorage(obj: object) {
	// 	this._storage = obj;
	// }

	// getStorage(): object {
	// 	return this._storage;
	// }

	// logContent(contentId) {
	// 	this.client.getEntry(contentId).then((entry) => console.log(entry));
	// }

	// getAllContent(query: object = {}) {
	// 	const promise = this.client.getEntries(query);
	// 	return from(promise).pipe(tap((val) => console.log(val)), map((val) => val.items));
	// }

	// getContent(contentId) {
	// 	const promise = this.client.getEntry(contentId);
	// 	return from(promise).pipe(tap((val) => console.log(val)), map((entry) => entry.fields));
	// }
}
