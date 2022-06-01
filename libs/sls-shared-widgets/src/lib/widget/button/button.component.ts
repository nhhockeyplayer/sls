import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core'
import {TButtonColor, TButtonSize, TButtonStyle, TButtonType} from './button'

@Component({
  selector: 'sls-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: ButtonComponent.defaultClassName,
    '[attr.active]': 'active',
    '[attr.disabled]': 'disabled'
  }
})
export class ButtonComponent {
  static defaultClassName = 'mat-button'
  /** Add optional ID to host
   */
  @HostBinding('attr.id') @Input() id?: string

  /** Button type
   *  default 'small'
   */
  @HostBinding('attr.type') @Input() type?: TButtonType = 'button'

  /** Button size
   *  default 'small'
   */
  @Input() size?: TButtonSize = 'sm'

  /** Button active
   *  default false
   */
  @Input() active?: boolean = false

  /** Button disabled
   *  default false
   */
  @Input() disabled?: boolean = false

  /** Button color
   *  default 'primary'
   */
  @Input() style?: TButtonColor = 'primary'

  /** Button border
   *  default 'primary'
   */
  @Input() border?: TButtonStyle = 'info"'

  @Output() emitClick: EventEmitter<Event> = new EventEmitter<Event>()
  @Output() emitFocus: EventEmitter<Event> = new EventEmitter<Event>()
  @Output() emitBlur: EventEmitter<Event> = new EventEmitter<Event>()

  @HostBinding('attr.tabIndex') tabIndex: number = 0

  /** Add extra class to host
   */
  @Input() extraClasses?: string

  @HostBinding('class') get classBinding() {
    const classBinding = [
      this.extraClasses,
      ButtonComponent.defaultClassName,
      'mat-raised-button',
      this.size && 'button-' + this.size,
      this.style && 'mat-' + this.style,
      this.border && 'btn-' + this.border,
    ].filter(Boolean).join(' ')
    return classBinding
  }

  @HostListener('click', ['$event'])
  buttonClick(event: Event) {
    this.emitClick.emit(event)
  }

  @HostListener('focus', ['$event'])
  buttonFocus(event: Event) {
    this.emitFocus.emit(event)
  }

  @HostListener('blur', ['$event'])
  buttonBlur(event: Event) {
    this.emitBlur.emit(event)
  }
}
