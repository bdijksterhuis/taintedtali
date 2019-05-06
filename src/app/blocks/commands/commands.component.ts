import { Component, OnInit, Input } from "@angular/core";
import { IBlock } from "../block";
import { Page } from "../../core/page";

@Component({
  selector: "app-commands",
  templateUrl: "./commands.component.html",
  styleUrls: ["./commands.component.scss"]
})
export class CommandsComponent implements IBlock, OnInit {
  @Input() currentPage: Page;
  @Input() content: any;
  constructor() {}
  ngOnInit() {}
}
