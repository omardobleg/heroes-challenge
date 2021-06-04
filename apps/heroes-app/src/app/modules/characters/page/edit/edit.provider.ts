import { InjectionToken, Provider } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";

// token to access a stream with the information you need
export const HERO_INFO = new InjectionToken<Observable<string>>(
    'A stream with current Hero to edit'
);

export const HERO_PROVIDERS: Provider[] = [
    {
        provide: HERO_INFO,
        deps: [ActivatedRoute],
        useFactory: heroFactory,
    },
];

export function heroFactory(
    { params }: ActivatedRoute,
    // organizationService: OrganizationService
): Observable<string> {
    return params.pipe(
        switchMap(({id}) => {
            return of(id);
        })
    );
}
