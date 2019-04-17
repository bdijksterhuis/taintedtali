// -- Base modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// -- Feature Modules
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { BlocksModule } from './blocks/blocks.module';

// -- Components
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { BlockComponent } from './block/block.component';
import { BlockDirective } from './block.directive';

@NgModule({
	declarations: [ AppComponent, PagesComponent, BlockComponent, BlockDirective ],
	imports: [ BrowserModule, AppRoutingModule, CoreModule, BlocksModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
