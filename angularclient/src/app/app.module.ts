import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateJoyaComponent } from './create-joya/create-joya.component';
import { JoyaListComponent } from './joya-list/joya-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateJoyaComponent } from './update-joya/update-joya.component';
import { ModalModule } from "./_modal/modal.module";
@NgModule({
    declarations: [
        AppComponent,
        CreateJoyaComponent,
        JoyaListComponent,
        UpdateJoyaComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ModalModule
    ]
})
export class AppModule { }
