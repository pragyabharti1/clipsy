import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path: 'createaccount', component: CreateAccountComponent },
  {path:'',redirectTo:'/home',pathMatch:'full'}
];


@NgModule({
  declarations: [
    AppComponent,

    CreateAccountComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
