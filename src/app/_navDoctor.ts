import { INavData } from '@coreui/angular';

export const navItemsDoctor: INavData[] = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer'
    },
    {
        title: true,
        name: 'Liquidaciones',
    },
    { 
        name:'Liquidaciones',
        url:'/payout',
        icon: 'icon-equalizer',
        children: [
            {
                name: 'Nueva liquidacion',
                url: '/payout/newPayout',
                icon: 'icon-credit-card'
            },
            {
                name: 'liquidados',
                url: '/payout/finishedpayouts',
                icon: 'icon-docs'
            },
        ]
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
