import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewblogRoutingModule } from './newblog-routing/newblog-routing.module';
import { NewblogComponent } from './newblog/newblog.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {AutosizeModule} from 'ngx-autosize';

@NgModule({
  declarations: [NewblogComponent],
  imports: [
    CommonModule,
    NewblogRoutingModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    AutosizeModule
  ]
})
export class NewblogModule { }
