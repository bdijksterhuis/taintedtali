// -- Base modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// -- Private Components
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HighlightComponent } from './highlight/highlight.component';
import { QuoteComponent } from './quote/quote.component';
import { ModlistComponent } from './modlist/modlist.component';
import { ContentComponent } from './content/content.component';
import { TwitterfeedComponent } from './twitterfeed/twitterfeed.component';
import { RouterModule } from '@angular/router';

// -- Bulk component list definition
const components = [ BreadcrumbsComponent, HeaderComponent, FooterComponent, HighlightComponent, QuoteComponent, ModlistComponent, ContentComponent, TwitterfeedComponent ];
let mappedComponents = {};
components.forEach((v) => Object.assign(mappedComponents, { [v.name]: v }));

@NgModule({
	declarations: [ ...components ],
	providers: [ { provide: 'ComponentList', useValue: mappedComponents } ],
	entryComponents: [ ...components ],
	imports: [ CommonModule, RouterModule ],
	exports: [ ...components ]
})
export class BlocksModule {}
