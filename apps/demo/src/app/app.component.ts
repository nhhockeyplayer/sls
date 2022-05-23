import {Component, ElementRef, HostBinding, Inject, OnInit, Renderer2} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Message} from '@sls/api-interfaces'
import {Brand, environment} from '@sls/shared-env/environments/environment'
import {DOCUMENT} from '@angular/common'
import {MatDialog} from '@angular/material/dialog'
import {OverlayContainer} from '@angular/cdk/overlay'
import {FormControl} from '@angular/forms'
import {ModalComponent} from './modal/modal.component'

export enum EBrand {
    IONIC = 'ionic',
    MATERIAL = 'material',
    BOOTSTRAP = 'bootstrap',
}

interface IColor {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    hello$ = this.http.get<Message>('/api/hello')

    brand: EBrand | Brand = EBrand.MATERIAL
    brandName: string = EBrand.MATERIAL

    title = 'Angular material dark mode'

    @HostBinding('class') classBinding = ''

    colorForm = new FormControl(false)
    toggleForm = new FormControl(false)

    selectedColor: string = '';
    colors: IColor[] = [
        {value: 'amber', viewValue: 'Amber'},
        {value: 'purple', viewValue: 'Purple'},
        {value: 'gray', viewValue: 'Gray'},
    ];

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private renderer: Renderer2,
        private elementRef: ElementRef,
        private http: HttpClient,
        private dialog: MatDialog, private overlay: OverlayContainer
    ) {

    }

    tosslePerOne() {
        // if (this.allSelected.selected) {
        //     this.allSelected.deselect()
        //     return false
        // }
        // if (this.colorForm.controls.userType.value.length == this.userTypeFilters.length)
        //     this.allSelected.select()

    }

    toggleAllSelection() {
        // if (this.allSelected.selected) {
        //     this.colorForm.controls.userType
        //         .patchValue([...this.userTypeFilters.map(item => item.key), 0])
        // } else {
        //     this.colorForm.controls.userType.patchValue([])
        // }
    }

    // ------------------- //

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

        this.toggleForm.valueChanges.subscribe((darkMode) => {
            const darkClassName = 'darkMode'
            this.classBinding = darkMode ? darkClassName : ''
            if (darkMode) {
                this.overlay.getContainerElement().classList.add(darkClassName)
            } else {
                this.overlay.getContainerElement().classList.remove(darkClassName)
            }
        })
    }

    switchMode(isDarkMode: boolean) {
        this.currentTheme = isDarkMode ? 'theme-dark' : 'theme-light'
        this.renderer.setAttribute(this.document.body, 'class', this.currentTheme)
        localStorage.setItem('activeTheme', this.currentTheme)
    }

    showDialog(): void {
        this.dialog.open(ModalComponent, {width: '500px'})
    }
}
