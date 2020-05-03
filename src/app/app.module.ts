import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SondaComponent } from './sonda/sonda.component';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninModule } from "./signin/signin.module";
import { SignupModule } from "./signup/signup.module";
import { GameModule } from './game/game.module';

//Angular Material Components
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

let config = new AuthServiceConfig([
	{
		id: GoogleLoginProvider.PROVIDER_ID,
		provider: new GoogleLoginProvider("419273351615-a2kp1blvs5f3idt3mlr5vbkeqtqgjvr6.apps.googleusercontent.com")
	},
	{
		id: FacebookLoginProvider.PROVIDER_ID,
		provider: new FacebookLoginProvider("234918024486588")
	}
]);

export function provideConfig() {
	return config;
}

@NgModule({
	declarations: [
		AppComponent,
		SondaComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatCheckboxModule,
		MatCheckboxModule,
		MatButtonModule,
		MatInputModule,
		MatAutocompleteModule,
		MatDatepickerModule,
		MatFormFieldModule,
		MatRadioModule,
		MatSelectModule,
		MatSliderModule,
		MatSlideToggleModule,
		MatMenuModule,
		MatSidenavModule,
		MatToolbarModule,
		MatListModule,
		MatGridListModule,
		MatCardModule,
		MatStepperModule,
		MatTabsModule,
		MatExpansionModule,
		MatButtonToggleModule,
		MatChipsModule,
		MatIconModule,
		MatProgressSpinnerModule,
		MatProgressBarModule,
		MatDialogModule,
		MatTooltipModule,
		MatSnackBarModule,
		MatTableModule,
		MatSortModule,
		MatPaginatorModule,
		SigninModule,
		SignupModule,
		GameModule,
		SocialLoginModule
	],
	providers: [
		{
			provide: AuthServiceConfig,
			useFactory: provideConfig
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
