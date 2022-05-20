import {Directive, HostBinding, Input} from '@angular/core'
import {THeadingType} from './heading'

@Directive({
  selector: 'h1[slsHeading], h2[slsHeading], h3[slsHeading], h4[slsHeading], h5[slsHeading], h6[slsHeading], div[slsHeading], span[slsHeading]'
})
export class HeadingDirective {
  static defaultClassName = 'slsHeading'
  /** Add optional ID to host
   */
  @HostBinding('attr.id')  @Input() id?: string
  /** Add optional ID to host
   */
  @Input() type?: THeadingType = 'h2'

  @HostBinding('attr.role') heading: string = 'heading'

  /** Add extra class to host
   */
  @Input() className?: string

  @HostBinding('class') get classBinding() {
    const classBinding = [
      HeadingDirective.defaultClassName,
      this.className
    ].filter(Boolean).join(' ')
    return classBinding
  }
}
