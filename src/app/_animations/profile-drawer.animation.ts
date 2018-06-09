import { trigger, state, animate, transition, style } from '@angular/animations';

export const profileDrawerAnimation =
  trigger('profileDrawerAnimation', [
    // route 'enter' transition
    transition(':enter', [

      // styles at start of transition
      style({ opacity: 0 }),

      // animation and styles at end of transition
      animate('.1s', style({ opacity: 0 }))
    ]),
    transition(':leave', [
      animate('.2s', style({opacity: 1}))
    ])
  ]);
