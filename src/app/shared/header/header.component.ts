import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
declare var $: any;

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  openLogoutModal() {
    $(".ui.basic.modal").modal("show");
  }

  Logout() {
    this.router.navigateByUrl("");
  }
}
