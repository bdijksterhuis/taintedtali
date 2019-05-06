// -- Base modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

// -- Feature modules
import { CoreModule } from "../core/core.module";

// -- Private Components
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HighlightComponent } from "./highlight/highlight.component";
import { QuoteComponent } from "./quote/quote.component";
import { ModlistComponent } from "./modlist/modlist.component";
import { ContentComponent } from "./content/content.component";
import { TwitterfeedComponent } from "./twitterfeed/twitterfeed.component";
import { RouterModule } from "@angular/router";
import { EmotesComponent } from "./emotes/emotes.component";
import { CommandsComponent } from "./commands/commands.component";
import { SetupComponent } from "./setup/setup.component";
import { EventsComponent } from "./events/events.component";
import { SocialsComponent } from "./socials/socials.component";
import { ContactformComponent } from "./contactform/contactform.component";

// -- Bulk component list definition
const components = [
  BreadcrumbsComponent,
  HeaderComponent,
  FooterComponent,
  HighlightComponent,
  QuoteComponent,
  ModlistComponent,
  ContentComponent,
  TwitterfeedComponent,
  EmotesComponent,
  CommandsComponent,
  SetupComponent,
  EventsComponent,
  SocialsComponent,
  ContactformComponent
];
let mappedComponents = {};
components.forEach(v => Object.assign(mappedComponents, { [v.name]: v }));

@NgModule({
  declarations: [...components],
  providers: [{ provide: "ComponentList", useValue: mappedComponents }],
  entryComponents: [...components],
  imports: [CommonModule, FormsModule, RouterModule, CoreModule],
  exports: [...components]
})
export class BlocksModule {}
