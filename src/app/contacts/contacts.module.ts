import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddComponent, ListComponent, ViewComponent, EditComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [AddComponent, ListComponent, ViewComponent, EditComponent],
})
export class ContactsModule {}
