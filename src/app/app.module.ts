import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { MediaComponent } from './components/media/media.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { QueryComponent } from './components/query/query.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { WarrantySupportComponent } from './components/warranty-support/warranty-support.component';
import { BlogMainComponent } from './components/blog-main/blog-main.component';
import { BlogArticleComponent } from './components/blog-article/blog-article.component';
import { AboutComponent } from './components/about/about.component';
import { FeatureComponent } from './components/feature/feature.component';
import { MainComponent } from './components/main/main.component';
import { EffecientComponent } from './components/effecient/effecient.component';
import { ModesComponent } from './components/modes/modes.component';
import { SleekestComponent } from './components/sleekest/sleekest.component';
import { InnerComponent } from './components/inner/inner.component';
import { ObjectlistComponent } from './components/objectlist/objectlist.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { PressComponent } from './components/press/press.component';
import { InstagramComponent } from './components/instagram/instagram.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    MediaComponent,
    ProductDetailComponent,
    ProductInfoComponent,
    QueryComponent,
    FaqsComponent,
    WarrantySupportComponent,
    BlogMainComponent,
    BlogArticleComponent,
    AboutComponent,
    FeatureComponent,
    MainComponent,
    EffecientComponent,
    ModesComponent,
    SleekestComponent,
    InnerComponent,
    ObjectlistComponent,
    PurchaseComponent,
    YoutubeComponent,
    PressComponent,
    InstagramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
