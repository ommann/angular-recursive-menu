import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RecursiveListComponent} from './components/recursive-list/recursive-list.component';
import {NgPipesModule} from "ngx-pipes";
import { LengthPipe } from './pipes/length.pipe';
import { StartsWithPipe } from './pipes/begins-with.pipe';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RecursiveListComponent,
    LengthPipe,
    StartsWithPipe,
    MenuPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
