import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppComponent} from './app.component'
import {NxWelcomeComponent} from './nx-welcome.component'
import {HttpClientModule} from '@angular/common/http'
import {SlsSharedWidgetsModule} from '@sls/sls-shared-widgets'
import {NavigationComponent} from './navigation/navigation.component'
import {SharedMaterialModule} from '@sls/shared-material'

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        NxWelcomeComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        SlsSharedWidgetsModule,
        SharedMaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
