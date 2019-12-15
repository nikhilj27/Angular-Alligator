import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { routerAnimation } from "./shared/animation";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [routerAnimation()]
})
export class AppComponent {
  title = "Angular-Alligator";

  /**
   * For router animation.
   * @param outlet
   */
  public getRouteAnimation(outlet: RouterOutlet) {
    const res =
      outlet.activatedRouteData["page"] === undefined
        ? -1
        : outlet.activatedRouteData["page"];

    return res;
  }
}
