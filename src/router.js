import Vue from 'vue';
import Router from 'vue-router';

import Index from './components/Index.vue';
import Swiftevent from './components/swiftevent/Swiftevent.vue';

Vue.use(Router);

export default new Router ({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/swiftevent',
      component: Swiftevent,
      name: 'swiftevent'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
})