import { INavData } from '@coreui/angular';

export const navItemsDoctor: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    title: true,
    name: 'Estudios'
  },
  {
    title: true,
    name: 'SET UP'
  },
  {
    name: 'setup',
    url: '/setup',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Equipos',
        url: '/setup/machines',
        icon: 'icon-puzzle'
      },
      {
        name: 'Estudios',
        url: '/setup/studies',
        icon: 'icon-puzzle'
      }
      ]
  }
]