import { Component, OnInit, Input } from "@angular/core";
import { IBlock } from "../block";
import { Page } from "src/app/core/page";

@Component({
  selector: "app-twitterfeed",
  templateUrl: "./twitterfeed.component.html",
  styleUrls: ["./twitterfeed.component.scss"]
})
export class TwitterfeedComponent implements IBlock, OnInit {
  @Input() currentPage: Page;
  @Input() content: any;
  constructor() {}
  ngOnInit() {}
}
