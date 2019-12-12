import { Component, OnInit, AfterViewInit } from "@angular/core";
import TurndownService from "turndown";

@Component({
  selector: "app-newblog",
  templateUrl: "./newblog.component.html",
  styleUrls: ["./newblog.component.scss"]
})
export class NewblogComponent implements OnInit, AfterViewInit {
  base64: string;
  ngAfterViewInit(): void {}

  constructor() {}

  ngOnInit() {}

  boldText() {
    document.execCommand("bold", false, null);
  }

  italicText() {
    document.execCommand("italic", false, null);
  }
  underlineText() {
    document.execCommand("underline", false, null);
  }

  uploadImage(): void {
    document.getElementById("fileSelector").click();
  }

  openFileChooser($event) {
    const file = $event.target.files[0];
    const fileReader = new FileReader();
    (fileReader.onload = () => {
      this.base64 = String(fileReader.result);
      this.insertImage(this.base64);
    }),
      fileReader.readAsDataURL(file);
  }

  insertImage(Imgbase64: string): void {
    const div = document.getElementById("story");
    const img = document.createElement("img");
    img.setAttribute("src", Imgbase64);
    img.setAttribute("width", "100%");
    img.setAttribute("height", "350px");
    div.appendChild(img);
  }

  publish() {
    // console.log(document.getElementById("story").innerHTML);
    const turndownService = new TurndownService();
    const markdown = turndownService.turndown(
      String(document.getElementById("story").innerHTML)
    );
    console.log(markdown);
  }
}
