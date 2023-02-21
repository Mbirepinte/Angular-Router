import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [			
    AppComponent,
      MenuComponent,
      SignupComponent,
      UserComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES), 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
