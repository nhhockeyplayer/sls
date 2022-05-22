import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppComponent} from './app.component'
import {NxWelcomeComponent} from './nx-welcome.component'
import {HttpClientModule} from '@angular/common/http'
import {SlsSharedWidgetsModule} from '@sls/sls-shared-widgets'
import {NavigationComponent} from './navigation/navigation.component'
import {SharedMaterialModule} from '@sls/shared-material'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {SampleDialogComponent} from './sample-dialog/sample-dialog.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,

        SharedMaterialModule,

        SlsSharedWidgetsModule,
    ],
    declarations: [
        AppComponent,
        NavigationComponent,
        SampleDialogComponent,
        NxWelcomeComponent
    ],
    exports:[
        NavigationComponent,
        SampleDialogComponent,
        NxWelcomeComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
