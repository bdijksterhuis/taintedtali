// -- Base modules
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

// -- Feature Modules
import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "./core/core.module";
import { BlocksModule } from "./blocks/blocks.module";
import { GraphQLModule } from "./graphql.module";

// -- Components
import { AppComponent } from "./app.component";
import { PagesComponent } from "./pages/pages.component";
import { BlockComponent } from "./block/block.component";
import { BlockDirective } from "./block.directive";

@NgModule({
  declarations: [AppComponent, PagesComponent, BlockComponent, BlockDirective],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, CoreModule, BlocksModule, GraphQLModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
