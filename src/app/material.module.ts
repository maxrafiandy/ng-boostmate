// angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material imports
import { MatButtonModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatInputModule
  ],

  exports: [
    MatButtonModule,
    MatInputModule
  ],
})

export class MaterialModule { }
