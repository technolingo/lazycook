import { Component } from "@angular/core";

@Component({
  selector: "lc-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "lazycook";
  compToDisplay = '';

  onCompToggled(compName: string) {
    this.compToDisplay = compName;
  }
}
