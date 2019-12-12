import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { TechnologyService } from "src/app/Services/technology.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-addnewtech",
  templateUrl: "./addnewtech.component.html",
  styleUrls: ["./addnewtech.component.scss"]
})
export class AddnewtechComponent implements OnInit {
  technologyId: number = 0;
  technologyForm: FormGroup;
  ImageName: string = "";

  constructor(
    public dialogRef: MatDialogRef<AddnewtechComponent>,
    private technologyService: TechnologyService,
    private formBuilder: FormBuilder
  ) {
    this.technologyForm = this.formBuilder.group({
      Name: ["", [Validators.required]],
      Description: ["", [Validators.required]]
    });
  }

  ngOnInit() {}

  get technologyControls() {
    return this.technologyForm.controls;
  }

  openFileChooser() {
    document.getElementById("fileChooser").click();
  }

  uploadImage(event) {
    const file = event.target.files[0];
    this.ImageName = file.name;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  modifyTechnology() {
    const formData = new FormData();
    formData.set("Id", this.technologyId.toString());
    formData.set("Name", this.technologyForm.value.Name);
    formData.set("Description", this.technologyForm.value.Description);
  }
}
