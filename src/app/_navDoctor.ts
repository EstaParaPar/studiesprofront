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
        icon: 'icon-equalizer',
        children: [
            {
                name: 'Equipos',
                url: '/setup/machines',
                icon: 'icon-screen-desktop'
            },
            {
                name: 'Estudios',
                url: '/setup/studies',
                icon: 'icon-docs'
            },
            {
                name: 'Obra Social',
                url: '/setup/healthins',
                icon: 'icon-credit-card'
            },
            {
                name: 'Usuarios',
                url: '/setup/users',
                icon: 'icon-people'
            }
        ]
    }
];
