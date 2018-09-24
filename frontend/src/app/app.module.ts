import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { IngredientsService } from './ingredients/ingredients.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'ingredients', component: IngredientsListComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IngredientsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [IngredientsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
