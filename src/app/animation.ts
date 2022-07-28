import { trigger, animate, transition, style, query, animateChild, group } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        animate('200ms ease-in',
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height:'100vh',
          opacity:0,
        }))
      ],{optional:true}),
      query(':enter', [
        animate('200ms ease-in',
        style({ opacity:1 }))
      ],{optional:true}),
    ]),
  ]);