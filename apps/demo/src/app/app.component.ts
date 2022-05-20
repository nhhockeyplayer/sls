import {Component, ElementRef, Inject, OnInit, Renderer2} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Message} from '@sls/api-interfaces'
import {Brand, environment} from '@sls/shared-env/environments/environment'
import {DOCUMENT} from '@angular/common'

export enum EBrand {
    IONIC = 'ionic',
    MATERIAL = 'material',
    BOOTSTRAP = 'bootstrap',
}

@Component({
    selector: 'sls-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    hello$ = this.http.get<Message>('/api/hello')

    brand: EBrand | Brand = EBrand.MATERIAL
    brandName: string = EBrand.MATERIAL

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private renderer: Renderer2,
        private elementRef: ElementRef,
        private http: HttpClient) {

    }

    get isDarkMode(): boolean {
        return this.currentTheme === 'theme-dark'
    }

    private currentTheme = 'theme-light'

    ngOnInit(): void {
        this.elementRef.nativeElement.style.setProperty('--theme-brand', environment.brand)
        this.elementRef.nativeElement.style.setProperty('--theme-brand-name', environment.brand)
        this.elementRef.nativeElement.style.setProperty('--theme-brand-ionic', EBrand.IONIC)
        this.elementRef.nativeElement.style.setProperty('--theme-brand-material', EBrand.MATERIAL)
        this.elementRef.nativeElement.style.setProperty('--theme-brand-bootstrap', EBrand.BOOTSTRAP)

        this.currentTheme = localStorage.getItem('activeTheme') || 'theme-light'
        this.renderer.setAttribute(this.document.body, 'class', this.currentTheme)
    }

    switchMode(isDarkMode: boolean) {
        this.currentTheme = isDarkMode ? 'theme-dark' : 'theme-light'
        this.renderer.setAttribute(this.document.body, 'class', this.currentTheme)
        localStorage.setItem('activeTheme', this.currentTheme)
    }
}
