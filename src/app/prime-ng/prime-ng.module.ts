import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ],
  exports: [MenubarModule,CardModule],
})
export class PrimeNgModule {}
