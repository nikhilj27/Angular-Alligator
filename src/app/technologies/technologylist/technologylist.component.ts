import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AddnewtechComponent } from "../addnewtech/addnewtech.component";

@Component({
  selector: "app-technologylist",
  templateUrl: "./technologylist.component.html",
  styleUrls: ["./technologylist.component.scss"]
})
export class TechnologylistComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openAddTechnologyDialog(): void {
    const dialogRef = this.dialog.open(AddnewtechComponent, {
      width: "50%",
      disableClose: true
    });
  }
}
