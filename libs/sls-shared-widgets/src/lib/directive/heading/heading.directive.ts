import {Directive, HostBinding, Input} from '@angular/core'
import {THeadingAlign, THeadingType} from './heading'
import {DomSanitizer, SafeStyle} from '@angular/platform-browser'

@Directive({
    selector: 'h1[slsHeading], h2[slsHeading], h3[slsHeading], h4[slsHeading], h5[slsHeading], h6[slsHeading], div[slsHeading], span[slsHeading]',
    host: {
        class: HeadingDirective.defaultClassName
    }
})
export class HeadingDirective {
    static defaultClassName = 'slsHeading'
    /** Add optional ID to host
     */
    @HostBinding('attr.id') @Input() id?: string
    /** Add optional type
     *  default: h2
     */
    @Input() type?: THeadingType = 'h2'

    /** Add optional align
     *  default: center
     */
    @Input() align: THeadingAlign = 'center'

    @HostBinding('attr.role') heading: string = 'heading'

    /** Add extra class to host
     */
    @HostBinding('attr.className') @Input() className?: string

    @HostBinding('class') get classBinding() {
        const classBinding = [
            HeadingDirective.defaultClassName,
            this.className
        ]
            .filter(Boolean)
            .join(' ')
        return classBinding
    }

    @HostBinding('style')
    get myStyle(): SafeStyle {
        return this.sanitizer.bypassSecurityTrustStyle(`text-align: ${this.align}`);
    }

    constructor(private sanitizer: DomSanitizer) {}
}
