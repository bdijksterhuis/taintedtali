import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[block]'
})
export class BlockDirective {
	constructor(public viewContainerRef: ViewContainerRef) {}
}
