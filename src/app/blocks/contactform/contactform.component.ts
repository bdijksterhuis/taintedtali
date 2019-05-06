import { Component, OnInit } from "@angular/core";
import { Contact } from "./contact";

// -- Animations
import { trigger, transition, animate, style } from "@angular/animations";

@Component({
  selector: "app-contactform",
  templateUrl: "./contactform.component.html",
  styleUrls: ["./contactform.component.scss"],
  animations: [
    trigger("submitted", [transition(":leave", [animate("0.5s ease-in-out", style({ height: 0 }))])]),
    trigger("loading", [
      transition(":enter", [style({ height: 0, visibility: "visible" }), animate("0.5s 0.5s ease-in-out", style({ height: "*" }))]),
      transition(":leave", [animate("0.5s ease-in-out", style({ height: 0 }))])
    ]),
    trigger("loaded", [transition(":enter", [style({ height: 0, visibility: "visible" }), animate("0.5s 0.5s ease-in-out", style({ height: "*" }))])])
  ]
})
export class ContactformComponent implements OnInit {
  public form: Contact;

  constructor() {}

  ngOnInit() {
    this.form = new Contact();
  }
}
