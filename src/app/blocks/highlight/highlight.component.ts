import { Component, OnInit, Input } from "@angular/core";
import { IBlock } from "../block";
import { Page } from "src/app/core/page";

@Component({
  selector: "app-highlight",
  templateUrl: "./highlight.component.html",
  styleUrls: ["./highlight.component.scss"]
})
export class HighlightComponent implements IBlock, OnInit {
  @Input() currentPage: Page;
  @Input() content: any;
  constructor() {}
  ngOnInit() {
    console.log(this.content);
  }
}
