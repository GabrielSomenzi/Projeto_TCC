import Home from './assets/vue/pages/home.vue';
import AboutPage from './assets/vue/pages/about.vue';


import PanelLeftPage from './assets/vue/pages/panel-left.vue';
import ColorThemes from './assets/vue/pages/color-themes.vue';


import Dentista from './assets/vue/pages/dentista.vue';
import Dermatologista from './assets/vue/pages/dermatologista.vue';
import Ginecologista from './assets/vue/pages/ginecologista.vue';
import Nutricionista from './assets/vue/pages/nutricionista.vue';
import Oftalmologista from './assets/vue/pages/oftalmologista.vue';


export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about/',
    component: AboutPage
  },


  {
    path: '/panel-left/',
    component: PanelLeftPage
  },
  {
    path: '/color-themes/',
    component: ColorThemes
  },

  {
    path: '/home/',
    component: Home
  },
  {
    path: '/dentista/',
    component: Dentista
  },
  {
    path: '/dermatologista/',
    component: Dermatologista
  },
  {
    path: '/ginecologista/',
    component: Ginecologista
  },
  {
    path: '/nutricionista/',
    component: Nutricionista
  },
  {
    path: '/oftalmologista/',
    component: Oftalmologista
  },
];
