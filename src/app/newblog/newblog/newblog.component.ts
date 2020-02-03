import { Component, OnInit, AfterViewInit } from "@angular/core";
import TurndownService from "turndown";

@Component({
  selector: "app-newblog",
  templateUrl: "./newblog.component.html",
  styleUrls: ["./newblog.component.scss"]
})
export class NewblogComponent implements OnInit, AfterViewInit {
  base64: string;
  content = `
  indent() {
    document.execCommand("indent", false, null);
  }
  
  `;
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

  indent() {
    document.execCommand("indent", false, null);
  }

  outdent() {
    document.execCommand("outdent", false, null);
  }

  justifyRight() {
    document.execCommand("justifyRight", false, null);
  }

  justifyLeft() {
    document.execCommand("justifyLeft", false, null);
  }

  justifyCenter() {
    document.execCommand("justifyCenter", false, null);
  }

  justifyFull() {
    document.execCommand("justifyFull", false, null);
  }

  insertUnorderedList() {
    document.execCommand("insertUnorderedList", false, null);
  }

  insertOrderedList() {
    document.execCommand("insertOrderedList", false, null);
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
    var sel, range;
    if (window.getSelection) {
      sel = window.getSelection();
      if (sel.getRangeAt && sel.rangeCount) {
        range = sel.getRangeAt(0);
        range.deleteContents();
        // const div = document.getElementById("story");
        const img = document.createElement("img");
        img.setAttribute("src", Imgbase64);
        img.setAttribute("width", "100%");
        img.setAttribute("height", "350px");
        // div.appendChild(img);
        range.insertNode(img);
      }
    }

    // document.execCommand("insertImage", false, Imgbase64);
  }

  insertCodeBlock() {
    var sel, range;
    if (window.getSelection) {
      sel = window.getSelection();
      if (sel.getRangeAt && sel.rangeCount) {
        range = sel.getRangeAt(0);
        range.deleteContents();
        var div = document.createElement("pre");
        div.style.width = "100%";
        div.style.height = "500px";
        div.style.border = "1px solid lightgrey";
        div.style.borderRadius = "3px";
        range.insertNode(div);
      }
    }
  }

  publish() {
    console.log(document.getElementById("story").innerHTML);
    // const turndownService = new TurndownService();
    // const markdown = turndownService.turndown(
    //   String(document.getElementById("story").innerHTML)
    // );
    // console.log(markdown);
  }
}
