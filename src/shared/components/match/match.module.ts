import { NgModule } from '@angular/core';
import { MatchComponent } from './match.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    MatchComponent,
  ],
  exports: [
    MatchComponent,
  ],
  imports: [
    MatCardModule,
    CommonModule,
    MatButtonModule,
  ],
})
export class MatchModule {

}
