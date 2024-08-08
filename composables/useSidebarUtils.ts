export default () => {
  const links = ref<
    {
      title: string;
      icon?: string;
      route?: string;
      list?: {
        name: string;
        show?: boolean;
        icon?: string;
        route?: string;
        sub?: { name: string; icon?: string; route?: string; sub?: object[] }[];
      }[];
      show?: boolean;
    }[]
  >([
    {
      title: 'Navigation',
      list: [
        {
          name: 'Dashboard',
          icon: 'view-dashboard',
          route: '/dashboard/setup'
        },
        {
          name: 'Owner',
          icon: 'view-dashboard',
          show: false,
          route: '/dashboard/owner'
        },
        {
          name: 'Doctor',
          icon: 'view-dashboard',
          show: false,
          route: '/dashboard/doctor'
        }
      ]
    },
    // {
    //   title: 'Components',
    //   icon: 'mdi-puzzle',
    //   list: [
    //     {
    //       name: 'Appointments',
    //       icon: 'calendar',
    //       show: false,
    //       route: '/dashboard'
    //     },
    //     {
    //       name: 'Patient Management',
    //       icon: 'user',
    //       show: false,
    //       route: '/dashboard'
    //     },
    //     {
    //       name: 'Doctors',
    //       icon: 'doctor',
    //       show: false,
    //       route: '/dashboard'
    //     },
    //     {
    //       name: 'Team Member',
    //       icon: 'users',
    //       show: false,
    //       route: '/dashboard'
    //     },
    //     {
    //       name: 'Accounts',
    //       icon: 'book-open-page-variant',
    //       show: false,
    //       sub: [
    //         {
    //           name: 'Dashboard',
    //           icon: 'chart-timeline',
    //           route: '/'
    //         },
    //         {
    //           name: 'Patient Ledger',
    //           icon: 'users',
    //           route: '/'
    //         }
    //       ]
    //     }
    //   ]
    // }
  ]);

  const toggleDropdown = (item: any): void => {
    item.show = !item.show;
  };

  return { links, toggleDropdown };
};
