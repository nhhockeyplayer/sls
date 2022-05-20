import {ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation} from '@angular/core'
import {TCardTitle} from './card'

@Component({
  selector: 'sls-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: CardComponent.defaultClassName
  }
})
export class CardComponent {
  static defaultClassName = 'sls-card'

  /** Add optional ID to host
   */
  @Input() id?: string

  /** Add optional ID to host
   */
  @Input() title?: TCardTitle = 'h1'

  @HostBinding('attr.role') card: string = 'card'
  @HostBinding('attr.tabIndex') tabIndex: number = 0

  /** Add extra class to host
   */
  @Input() className?: string

  @HostBinding('class') get classBinding() {
    const classBinding = [
      CardComponent.defaultClassName,
      this.className
    ].filter(Boolean).join(' ')
    return classBinding
  }
}
