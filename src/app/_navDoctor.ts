import { INavData } from '@coreui/angular';

export const navItemsDoctor: INavData[] = [
    {
        name: 'Dashboard',
        url: '/dashboardDoctor',
        icon: 'icon-speedometer'
    },
    {
        title: true,
        name: 'Liquidaciones',
    },
    {
        name: 'Liquidaciones',
        url: '/payout',
        icon: 'icon-equalizer',
        children: [
            {
                name: 'Nueva liquidacion',
                url: '/payout/newPayout',
                icon: 'icon-credit-card'
            },
            {
                name: 'Finalizadas',
                url: '/payout/confirmedPayout',
                icon: 'icon-docs'
            }
        ]
    },
    {
        title: true,
        name: 'Estudios',
    },
    {
        name: 'Estudios pendientes',
        url: '/studies/studiespendingpayout',
        icon: 'icon-clock'
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
                name: 'Precios',
                url: '/setup/groupPrice',
                icon: 'icon-docs'
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
            },
            {
                name: 'Registrar Usuario',
                url: '/setup/newuser',
                icon: 'icon-user'
            },
        ]
    }
];
