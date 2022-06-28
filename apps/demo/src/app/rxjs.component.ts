import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core'
import {concatMap, exhaustMap, fromEvent, interval, map, mergeMap, Observable, shareReplay, switchMap} from 'rxjs'
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
        this.formControl.valueChanges.pipe(
            mergeMap((str) => {
                return this.httpClient.get(`https://jsonplaceholder.typicode.com/posts?query=${str}`)
            })
        ).subscribe(response => {
            console.log(response)
        })

        // this.doMergeSwitchConcatExhaust()
        // this.doMergeMap()
        this.doColdObservableDataSourceComesFromInsideObservable()
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

        // let clock = 0
        // const obs$ = fromEvent(this.button.nativeElement, 'click')
        //     .pipe(
        //         map(() => ++clock),
        //         exhaustMap((clock) => {
        //             // inner Observable
        //             return interval(1000).pipe(
        //                 map((time) => `Clock ${clock} ${time}`)
        //             )
        //         })
        //     )
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

    doColdObservableDataSourceComesFromInsideObservable() {
        // COLD observables only emit when we subscribe to them
        // HOT observables emit always
        // Cold observables are unicast
        // HOT observables are multicast (share values to multiple subscribers... ie. http)
        // HOT observables source is created and activated outside the observable
        // COLD observables source is created and activated inside the observable
        // Theres no magic to hot/cold.
        // HOT observables are mouse/keyboard live flowing streams emitting at any moment
        // COLD Observables are prefabricated data waiting to be subscribed to attached to a stream
        // HTTP is COLD by default and if you do not shareReplay() which makes it HOT individual subscribes will be unique different data and could be trapped in race conditions
        let posts$: Observable<any>

        // http always returns cold observables,
        posts$ = this.httpClient.get('https://jsonplaceholder/typicode.com/posts')
            .pipe(
                shareReplay()
            )

        function sourceObservableDataFromWithinANDfromOutsideHotANDCold (): Observable<number> {
            // const timestamp = Date.now()    // HOT outside observable HOT will always emit even if not subscribed
            return new Observable((subscriber) => {
                const timestamp = Date.now()    // COLD within observable COLD will ONLY emit if subscribed to
                subscriber.next(timestamp)
            })
        }
        const obs$ = sourceObservableDataFromWithinANDfromOutsideHotANDCold ()

        obs$.subscribe({
            next: ((value) => console.log(value))
        })
        // RACE CONDITION TRAP during subscribing latency gaps in async
        obs$.subscribe({    // race condition will be same time
            next: (value) => console.log(value)
        })
        // RACE CONDITION TRAP TRAP SOLUTION add time out
        setTimeout(() => {
            obs$.subscribe({
                next: (value) => console.log(value)
            })
        }, 2000)
    }
}
