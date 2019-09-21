//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';
import { FooterComponent,PostdetailComponent,PostlistComponent} from './components'
import { HomeComponent, ResultComponent } from './pages/'

//Services
import { DataService,RequestService,PagerService } from './services/';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultComponent,
    FooterComponent,
    PostdetailComponent,
    PostlistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService,RequestService,PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
