import { Pipe, PipeTransform } from '@angular/core';
import { ContentService } from './content.service';
import * as marked from 'marked';
@Pipe({
	name: 'mdToHtml'
})
export class MdToHtmlPipe implements PipeTransform {
	constructor(private _contentService: ContentService) {}
	transform(value: any, args?: any): any {
		return this.markdownToHtml(value);
	}

	public markdownToHtml(md: string) {
		return marked(md);
	}
}
