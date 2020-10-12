import { INavData } from '@coreui/angular';
import {AllStudiesTechComponent} from '@views/studies/listStudiesTech/allStudies/allStudiesTech.component';

export const navItemsUser: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dash_tecnico',
    icon: 'icon-speedometer'
  },
   {
    name: 'Estudios',
    url: '/studies',
    icon: 'icon-docs',
    children: [
        {
            name: 'Nuevo Estudio',
            url: '/studies/newstudy',
            icon: 'icon-plus'
        },
        {
            name:  'Estudios',
            icon: 'icon-list',
            url: '/studies/allstudiestech'
        },
        {
            name: 'Estudios Pendientes',
            icon: 'icon-list',
            url: '/studies/pendingstudiestech'
        }
    ]},


];
