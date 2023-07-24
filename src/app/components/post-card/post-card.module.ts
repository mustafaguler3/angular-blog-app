import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './post-card.component';



@NgModule({
  declarations: [
    PostCardComponent
  ],
  exports:[PostCardComponent],
  imports: [
    CommonModule
  ]
})
export class PostCardModule { }
