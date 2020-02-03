import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewblogRoutingModule } from "./newblog-routing/newblog-routing.module";
import { NewblogComponent } from "./newblog/newblog.component";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { AutosizeModule } from "ngx-autosize";
import { NewblogService } from "../Services/newblog.service";
import { MatCardModule } from "@angular/material/card";
import { CodemirrorModule } from "@ctrl/ngx-codemirror";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [NewblogComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NewblogRoutingModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    AutosizeModule,
    CodemirrorModule
  ],
  providers: [NewblogService]
})
export class NewblogModule {}
