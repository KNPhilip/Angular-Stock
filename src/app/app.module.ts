import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemSectionComponent } from './components/item-section/item-section.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';

const appRoutes: Routes = [
    { path: '', component: ItemListComponent },
    { path: 'about', component: AboutComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    ItemListComponent,
    ItemSectionComponent,
    AddItemComponent,
    AboutComponent,
    FooterComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }