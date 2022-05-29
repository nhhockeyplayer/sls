import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppComponent} from './app.component'
import {NxWelcomeComponent} from './nx-welcome.component'
import {HttpClientModule} from '@angular/common/http'
import {SlsSharedWidgetsModule} from '@sls/sls-shared-widgets'
import {NavigationComponent} from './navigation/navigation.component'
import {SharedMaterialModule} from '@sls/shared-material'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {ModalComponent} from './modal/modal.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {RxjsComponent} from './rxjs.component'

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
        ModalComponent,
        NxWelcomeComponent,
        RxjsComponent
    ],
    exports:[
        NavigationComponent,
        ModalComponent,
        NxWelcomeComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
