import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core'
import {concatMap, exhaustMap, fromEvent, interval, map, mergeMap, Observable, switchMap} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {FormControl} from '@angular/forms'

@Component({
    selector: 'app-rxjs',
    template: `<input [formControl]="formControl" type="text" placeHolder="start to type"/>`,
    // template: `<button #button>Run New CLock</button>`,
    // template: `
    //     <input type="text" id="input1" #input1>
    //     <input type="text" id="input2" #input2>
    //     <p>Combined value: <span #span1></span></p>
    // `,
})
export class RxjsComponent implements AfterViewInit {
    @ViewChild('input1') input1!: ElementRef
    @ViewChild('input2') input2!: ElementRef
    @ViewChild('span1') span1!: ElementRef
    @ViewChild('button') button!: ElementRef

    formControl = new FormControl("")

    constructor(private httpClient: HttpClient) {

    }

    ngAfterViewInit() {
        // this.doMergeSwitchConcatExhaust()
        // this.doMergeMap()


        this.formControl.valueChanges.pipe(
            mergeMap((str) => {
                return this.httpClient.get(`https://jsonplaceholder.typicode.com/posts?query=${str}`)
            })
        ).subscribe(response => {
            console.log(response)
        })
    }

    doMergeMap() {
        const obs1: Observable<Event> = fromEvent(this.input1.nativeElement, 'input')
        const obs2: Observable<Event> = fromEvent(this.input2.nativeElement, 'input')
        const span = this.span1

        obs1.pipe(
            mergeMap(
                (event1: Event) => {
                return obs2.pipe(
                    map(
                        (event2: Event) => event1.target + ' ' + event2.target
                    )
                )
            })
        ).subscribe(combinedValue => {
            this.span1.nativeElement.textContent = combinedValue
        })
    }

    doMergeSwitchConcatExhaust() {
        let clock = 0
        fromEvent(this.button.nativeElement, 'click')
            .pipe(
                map(() => ++clock),
                exhaustMap((clock) => {
                    // inner Observable
                    return interval(1000).pipe(
                        map((time) => `Clock ${clock} ${time}`)
                    )
                })
            ).subscribe(console.log)
    }
}
