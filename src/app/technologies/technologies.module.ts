import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddnewtechComponent } from "./addnewtech/addnewtech.component";
import { TechnologylistComponent } from "./technologylist/technologylist.component";
import { TechnologyComponent } from "./technologylist/technology/technology.component";
import { TechnologyRoutingModule } from "./technology-routing/technology-routing.module";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AddnewtechComponent,
    TechnologylistComponent,
    TechnologyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TechnologyRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatDialogModule,
    MatInputModule
  ],
  entryComponents: [AddnewtechComponent]
})
export class TechnologiesModule {}
