import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatchService } from '../../services/match/match.service';
import { BehaviorSubject, Subject, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-match',
  styleUrls: ['./match.component.scss'],
  templateUrl: './match.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatchComponent {

  private getMatchSubj$ = new Subject();
  public match$ = this.getMatchSubj$.pipe(
    switchMap((matchParams: any) => this.matchService.getMatch(matchParams.personId, matchParams.like)),
    tap(hasMatch => {
      if (hasMatch) {
        this.popupVisible$.next(true);
      } else {
        this.getCardSubj$.next(null);
      }
    }),
  );

  private getCardSubj$ = new BehaviorSubject<null>(null);

  public card$ = this.getCardSubj$.pipe(
    switchMap(() => this.matchService.getNextPerson()),
  );

  public popupVisible$ = new BehaviorSubject<boolean>(false);

  constructor(
    private matchService: MatchService,
  ) {
  }

  public like(personId: string): void {
    this.getMatchSubj$.next({
      personId,
      like: true,
    });
  }

  public dislike(personId: string): void {
    this.getMatchSubj$.next({
      personId,
      like: false,
    });
    this.getCardSubj$.next(null);
  }

  public closePopup(): void {
    this.popupVisible$.next(false);
    this.getCardSubj$.next(null);
  }

}
