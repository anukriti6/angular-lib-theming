import { NgModule } from '@angular/core';
import { TestLibComponent } from './test-lib.component';
import { MyButtonComponent } from './my-button/my-button.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [TestLibComponent, MyButtonComponent],
  imports: [
    MatButtonModule
  ],
  exports: [TestLibComponent,MyButtonComponent]
})
export class TestLibModule { }
