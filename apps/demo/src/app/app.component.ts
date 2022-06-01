import {Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, HostBinding, Inject, OnInit, Renderer2} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Message} from '@sls/api-interfaces'
import {Brand, environment} from '@sls/shared-env/environments/environment'
import {DOCUMENT} from '@angular/common'
import {MatDialog} from '@angular/material/dialog'
import {OverlayContainer} from '@angular/cdk/overlay'
import {FormControl} from '@angular/forms'
import {ModalComponent} from './modal/modal.component'

const DARK_SUFFIX = `-dark`;

export enum EBrand {
    IONIC = 'ionic',
    MATERIAL = 'material',
    BOOTSTRAP = 'bootstrap',
}

interface IColor {
    value: string;
    displayKey: string;
}

export type ThemeMode = 'light' | 'dark'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    brand: EBrand | Brand = EBrand.MATERIAL
    brandName: string = EBrand.MATERIAL

    title = 'Sass Library DESIGN SYSTEM brand ' + this.brandName

    @HostBinding('class') classBinding = ''

    toggleForm = new FormControl(false)

    selectedColor: string = '';
    colors: IColor[] = [
        {value: 'amber', displayKey: 'Amber'},
        {value: 'purple', displayKey: 'Purple'},
        {value: 'gray', displayKey: 'Gray'},
    ];

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private renderer: Renderer2,
        private elementRef: ElementRef,
        private http: HttpClient,
        private dialog: MatDialog, private overlay: OverlayContainer
    ) {

    }

    private currentTheme!: ThemeMode

    ngOnInit(): void {
        this.elementRef.nativeElement.style.setProperty('--theme-brand', environment.brand)
        this.elementRef.nativeElement.style.setProperty('--theme-brand-name', environment.brand)
        this.elementRef.nativeElement.style.setProperty('--theme-brand-ionic', EBrand.IONIC)
        this.elementRef.nativeElement.style.setProperty('--theme-brand-material', EBrand.MATERIAL)
        this.elementRef.nativeElement.style.setProperty('--theme-brand-bootstrap', EBrand.BOOTSTRAP)

        // 1st pass read whats persisted and set that
        this.currentTheme = localStorage.getItem('activeTheme')  as ThemeMode || 'light' as ThemeMode
        switch (this.currentTheme) {
            case 'light': {
                this.overlay.getContainerElement().classList.remove('dark')
                this.overlay.getContainerElement().classList.add('light')
                this.renderer.setAttribute(this.document.body, 'class', 'light')
            }
                break
            case 'dark': {
                this.overlay.getContainerElement().classList.remove('light')
                this.overlay.getContainerElement().classList.add('dark')
                this.renderer.setAttribute(this.document.body, 'class', 'dark')
            }
                break
            default: {
                this.overlay.getContainerElement().classList.remove('light')
                this.overlay.getContainerElement().classList.remove('dark')
                this.overlay.getContainerElement().classList.add('light')
                this.renderer.setAttribute(this.document.body, 'class', 'light')
                this.currentTheme = 'light'
            }
        }
        this.toggleForm.valueChanges.subscribe(() => {
            if ( this.overlay.getContainerElement().classList.contains('light') ) {
                this.currentTheme = 'light'
            } else {
                if ( this.overlay.getContainerElement().classList.contains('dark') ) {
                    this.currentTheme = 'dark'
                }
            }
            this.toggleTheme()
        })
        this.elementRef.nativeElement.style.setProperty('--theme', this.currentTheme)
    }

    toggleTheme() {
        this.renderer.removeAttribute(this.document.body, 'class', 'light')
        this.renderer.removeAttribute(this.document.body, 'class', 'dark')
        switch (this.currentTheme) {
            case 'light': {
                this.overlay.getContainerElement().classList.remove('light')
                this.overlay.getContainerElement().classList.add('dark')
                this.renderer.setAttribute(this.document.body, 'class', 'dark')
                this.currentTheme = 'dark'
            }
                break
            case 'dark': {
                this.overlay.getContainerElement().classList.remove('dark')
                this.overlay.getContainerElement().classList.add('light')
                this.renderer.setAttribute(this.document.body, 'class', 'light')
                this.currentTheme = 'light'
            }
                break
            default: {
                this.overlay.getContainerElement().classList.remove('light')
                this.overlay.getContainerElement().classList.remove('dark')
                this.overlay.getContainerElement().classList.add('light')
                this.renderer.setAttribute(this.document.body, 'class', 'light')
                this.currentTheme = 'light'
            }
        }
        localStorage.setItem('activeTheme', this.currentTheme)
        this.elementRef.nativeElement.style.setProperty('--theme', this.currentTheme)
    }

    showDialog(): void {
        this.dialog.open(ModalComponent, {width: '500px'})
    }

    get isDark(): boolean {
        return this.currentTheme === 'dark'
    }
}
