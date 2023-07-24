import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryNavbarComponent } from './components/category-navbar/category-navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SubscriptionFormComponent } from './components/subscription-form/subscription-form.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { PostComponent } from './components/post/post.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostCardComponent } from './components/post-card/post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryNavbarComponent,
    HomeComponent,
    SingleCategoryComponent,
    TermsAndConditionComponent,
    ContactUsComponent,
    SubscriptionFormComponent,
    CommentFormComponent,
    CommentListComponent,
    PostComponent,
    AboutUsComponent,
    FooterComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
