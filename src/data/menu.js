import settings from '../assets/images/settings.svg';
import avatar from '../assets/images/avatar.svg';
import envelope from '../assets/images/envelope.svg';
import home from '../assets/images/home.svg';
import { routes } from '../routes';

export const menu = [
 {
    id: 1,
    nameLink: 'OVERVIEW',
    path: routes.overview
  },
  {
    id: 2,
    nameLink: 'TABLES',
    path: routes.tables
  },
  {
    id: 3,
    nameLink: 'GUESTS',
    path: routes.guests
  },
  {
    id: 4,
    nameLink: 'DELIVERY',
    path: routes.delivery
  }
];

export const icon = [
  {
    id: 1,
    iconImg: settings
  },
  {
    id: 2,
    iconImg: avatar
  },
  {
    id: 3,
    iconImg: envelope
  },
  {
    id: 4,
    iconImg: home
  }
];

