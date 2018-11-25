import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// components
import { HeaderComponent } from './components/header/header.component';
import { GNBComponent } from './components/GNB/gnb.component';
import { FooterComponent } from './components/footer/footer.component';

// pages
import { MainComponent } from './pages/main/main.component';
import { PopComponent } from './pages/pop/pop.component';
import { NewComponent } from './pages/new/new.component';
import { CategoryComponent } from './pages/category/category.component';
import { CurationComponent } from './pages/curation/curation.component';

// services
import { ApiService } from './services/api.service';

// reducer
import { curationReducer } from './store/reducer/curation.reducer';

// effects
import { CurationEffects } from './store/effects/curation.effects';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    PopComponent,
    NewComponent,
    CategoryComponent,
    CurationComponent,
    GNBComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ curation : curationReducer }),
    EffectsModule.forRoot([CurationEffects]),
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
