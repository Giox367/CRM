import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditClientComponent } from './edit-client/edit-client.component';

@NgModule({
  declarations: [EditClientComponent],
  imports: [CommonModule, FormsModule],
})
export class ClientsModule {}
