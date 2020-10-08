/* eslint-disable no-new */
/**
 DONDOCA  - Admin Dashboard
 @page Components Index
 @description Index for pages router
*/




import Parallax from '@/router/App/Parallax';
import Treeview from '@/router/App/Treeview';
import Calendars from '@/router/App/Calendars';
import Timelines from '@/router/App/Timelines';
//EXAMPLES PAGES
import BarChart from '@/router/Charts/Bar-chart';
import Bar3D from '@/router/Charts/Bar3d';
import CalendarMap from '@/router/Charts/Calendar-map';
import Globe from '@/router/Charts/Globe';
import Graph from '@/router/Charts/Graph';
import LineChart from '@/router/Charts/Line-chart';
import MapChart from '@/router/Charts/Map-chart';
import PieChart from '@/router/Charts/Pie-chart';
import Sankey from '@/router/Charts/Sankey';
import SunBurst from '@/router/Charts/Sun-burst';
import Tree from '@/router/Charts/Tree';
import Voxels from '@/router/Charts/Voxels';
import Alerts from '@/router/Components/Alerts';
import Avatars from '@/router/Components/Avatars';
import Badges from '@/router/Components/Badges';
import BottomNavigation from '@/router/Components/Bottom-navigation';
import BottomSheets from '@/router/Components/Bottom-sheets';
import Breadcrumbs from '@/router/Components/Breadcrumbs';
import Buttons from '@/router/Components/Buttons';

import Cards from '@/router/Components/Cards';
import Carousels from '@/router/Components/Carousels';
import Chips from '@/router/Components/Chips';
import DataIterator from '@/router/Components/Data-iterator';
import DataTables from '@/router/Components/Data-tables';
import Dialogs from '@/router/Components/Dialogs';
import Dividers from '@/router/Components/Dividers';
import ExpansionPanels from '@/router/Components/Expansion-panels';
import FloatingActionButtons from '@/router/Components/Floating-action-buttons';
import Footer from '@/router/Components/Footer';
import Images from '@/router/Components/Images';
import Lists from '@/router/Components/Lists';
import Menus from '@/router/Components/Menus';
import NavigationDrawers from '@/router/Components/Navigation-drawers';
import Paginations from '@/router/Components/Paginations';
//DASHBOARD PAGES
import Dashboard1 from '@/router/Dashboards/Dashboard1.vue';
import Dashboard2 from '@/router/Dashboards/Dashboard2.vue';
import Autocompletes from '@/router/Forms/Autocompletes';
import Combobox from '@/router/Forms/Combobox';
import Forms from '@/router/Forms/Forms';
import SelectionControls from '@/router/Forms/Selection-controls';
import Selects from '@/router/Forms/Selects';
import Sliders from '@/router/Forms/Sliders';
import ButtonGroups from '@/router/Groups/Button-groups';
import ItemGroups from '@/router/Groups/Item-groups';
import Windows from '@/router/Groups/Windows';
import DatePickers from '@/router/Pickers/Date-pickers';
import TimePickers from '@/router/Pickers/Time-pickers';
import Hover from '@/router/Utils/Hover';
import Progress from '@/router/Utils/Progress';
import Ratings from '@/router/Utils/Ratings';
import Sheets from '@/router/Utils/Sheets';
import Snackbars from '@/router/Utils/Snackbars';
import Sparklines from '@/router/Utils/Sparklines';
import Steppers from '@/router/Utils/Steppers';
import Subheaders from '@/router/Utils/Subheaders';
import Tabs from '@/router/Utils/Tabs';
import Grid from '@/router/Layout/Grid';
import Responsive from '@/router/Layout/Responsive';
import Layout from '@/router/Layout/Layout';
import Toolbars from '@/router/Utils/Toolbars';
import Tooltips from '@/router/Utils/Tooltips';

import error404 from '@/router/Pages/error404.vue'
import error505 from '@/router/Pages/error505.vue'
import Login from '@/router/Pages/Login.vue'
import Widgets1 from '@/router/Widgets/Widgets1.vue'
import Widgets2 from '@/router/Widgets/Widgets2.vue'
import Profile from '@/router/App/Profile.vue'
import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router)
//ROUTER CONFIG
export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes: [{
      path: '/',
      name: 'dashboard1',
      component: Dashboard1
    },
    {
      path: '/dashboards/dashboard1',
      name: 'dashboard1',
      component: Dashboard1
    }, {
      path: '/dashboards/dashboard2',
      name: 'dashboard2',
      component: Dashboard2
    },
    {
      path: '/charts/bar-chart',
      name: 'bar-chart',
      component: BarChart
    },

    {
      path: '/charts/line-chart',
      name: 'line-chart',
      component: LineChart
    },

    {
      path: '/charts/pie-chart',
      name: 'pie-chart',
      component: PieChart
    },

    {
      path: '/charts/map-chart',
      name: 'map-chart',
      component: MapChart
    },

    {
      path: '/charts/graph',
      name: 'graph',
      component: Graph
    },

    {
      path: '/charts/tree',
      name: 'tree',
      component: Tree
    },

    {
      path: '/charts/sun-burst',
      name: 'sun-burst',
      component: SunBurst
    },

    {
      path: '/charts/calendar-map',
      name: 'calendar-map',
      component: CalendarMap
    },

    {
      path: '/charts/sankey',
      name: 'sankey',
      component: Sankey
    },

    {
      path: '/charts/voxels',
      name: 'voxels',
      component: Voxels
    },

    {
      path: '/charts/globe',
      name: 'globe',
      component: Globe
    },

    {
      path: '/charts/bar3d',
      name: 'bar3d',
      component: Bar3D
    },

    {
      path: '/components/alerts',
      name: 'alerts',
      component: Alerts
    },

    {
      path: '/components/avatars',
      name: 'avatars',
      component: Avatars
    },

    {
      path: '/components/badges',
      name: 'badges',
      component: Badges
    },

    {
      path: '/components/bottom-navigation',
      name: 'bottom-navigation',
      component: BottomNavigation
    },

    {
      path: '/components/bottom-sheets',
      name: 'bottom-sheets',
      component: BottomSheets
    },

    {
      path: '/components/breadcrumbs',
      name: 'breadcrumbs',
      component: Breadcrumbs
    },

    {
      path: '/components/buttons',
      name: 'buttons',
      component: Buttons
    },

    {
      path: '/components/floating-action-buttons',
      name: 'floating-action-buttons',
      component: FloatingActionButtons
    },

    {
      path: '/app/calendars',
      name: 'calendars',
      component: Calendars
    },

    {
      path: '/components/cards',
      name: 'cards',
      component: Cards
    },

    {
      path: '/components/carousels',
      name: 'carousels',
      component: Carousels
    },

    {
      path: '/components/chips',
      name: 'chips',
      component: Chips
    },

    {
      path: '/components/data-iterator',
      name: 'data-iterator',
      component: DataIterator
    },

    {
      path: '/components/data-tables',
      name: 'data-tables',
      component: DataTables
    },

    {
      path: '/components/dialogs',
      name: 'dialogs',
      component: Dialogs
    },

    {
      path: '/components/dividers',
      name: 'dividers',
      component: Dividers
    },

    {
      path: '/components/images',
      name: 'images',
      component: Images
    },

    {
      path: '/components/lists',
      name: 'lists',
      component: Lists
    },

    {
      path: '/components/menus',
      name: 'menus',
      component: Menus
    },

    {
      path: '/components/navigation-drawers',
      name: 'navigation-drawers',
      component: NavigationDrawers
    },

    {
      path: '/components/paginations',
      name: 'paginations',
      component: Paginations
    },

    {
      path: '/components/expansion-panels',
      name: 'expansion-panels',
      component: ExpansionPanels
    },

    {
      path: '/components/footer',
      name: 'footer',
      component: Footer
    },

    {
      path: '/groups/button-groups',
      name: 'button-groups',
      component: ButtonGroups
    },

    {
      path: '/groups/item-groups',
      name: 'item-groups',
      component: ItemGroups
    },

    {
      path: '/groups/windows',
      name: 'windows',
      component: Windows
    },

    {
      path: '/pickers/date-pickers',
      name: 'date-pickers',
      component: DatePickers
    },

    {
      path: '/pickers/time-pickers',
      name: 'time-pickers',
      component: TimePickers
    },

    {
      path: '/utils/hover',
      name: 'hover',
      component: Hover
    },

    {
      path: '/utils/progress',
      name: 'progress',
      component: Progress
    },

    {
      path: '/utils/ratings',
      name: 'ratings',
      component: Ratings
    },

    {
      path: '/utils/sheets',
      name: 'sheets',
      component: Sheets
    },

    {
      path: '/utils/snackbars',
      name: 'snackbars',
      component: Snackbars
    },

    {
      path: '/utils/sparklines',
      name: 'sparklines',
      component: Sparklines
    },

    {
      path: '/utils/steppers',
      name: 'steppers',
      component: Steppers
    },

    {
      path: '/utils/subheaders',
      name: 'subheaders',
      component: Subheaders
    },

    {
      path: '/utils/tabs',
      name: 'tabs',
      component: Tabs
    },

    {
      path: '/app/timelines',
      name: 'timelines',
      component: Timelines
    },

    {
      path: '/utils/toolbars',
      name: 'toolbars',
      component: Toolbars
    },

    {
      path: '/utils/tooltips',
      name: 'tooltips',
      component: Tooltips
    },

    {
      path: '/app/treeview',
      name: 'treeview',
      component: Treeview
    },

    {
      path: '/app/parallax',
      name: 'parallax',
      component: Parallax
    },

    {
      path: '/Forms/autocompletes',
      name: 'autocompletes',
      component: Autocompletes
    },

    {
      path: '/Forms/combobox',
      name: 'combobox',
      component: Combobox
    },

    {
      path: '/Forms/forms',
      name: 'forms',
      component: Forms
    },

    {
      path: '/Forms/selects',
      name: 'selects',
      component: Selects
    },

    {
      path: '/Forms/selection-controls',
      name: 'selection-controls',
      component: SelectionControls
    },

    {
      path: '/Forms/sliders',
      name: 'sliders',
      component: Sliders
    }, {
      path: '/Layout/grid',
      name: 'grid',
      component: Grid
    }, {
      path: '/Layout/responsive',
      name: 'responsive',
      component: Responsive
    }, {
      path: '/Layout/layout',
      name: 'layout',
      component: Layout
    }, {
      path: '/Pages/error404',
      name: 'error404',
      component: error404
    }, {
      path: '/Widgets/widgets1',
      name: 'Widgets1',
      component: Widgets1
    }, {
      path: '/App/profile',
      name: 'Profile',
      component: Profile
    }, {
      path: '/Widgets/widgets2',
      name: 'Widgets2',
      component: Widgets2
    }, {
      path: '/Pages/error505',
      name: 'error505',
      component: error505,
      meta: {
        allowAnonymous: true
      }
    }, {
      path: '/Pages/login',
      name: 'Login',
      component: Login,
      meta: {
        allowAnonymous: true
      }

    },

  ]
})
