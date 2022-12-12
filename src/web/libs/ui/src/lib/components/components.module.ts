import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar';
import {AboutComponent} from './about';


@NgModule({
  declarations: [NavbarComponent, AboutComponent],
  imports: [
    CommonModule
  ],
  exports: [NavbarComponent, AboutComponent]
})
export class ComponentsModule { }
