import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import WorkerViewMain from '../views/WorkerViewMain.vue';
import ApplicantView from '../views/ApplicantView.vue';
import WorkerLogin from '../views/WorkerLogin.vue';
import UserLogin from '../views/UserLogin.vue';
import ApplicantRegistration from '../views/ApplicantRegistrtion.vue';
import UserList from '../views/userListRanking.vue';
import HouseList from '../views/housesList.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',

      component: HomeView,
    },
    {
      path: '/worker-dashboard',
      name: 'WorkerDash',

      component: WorkerViewMain,
    },
    {
      path: '/Applicant-dash',
      name: 'UserDash',
      component: ApplicantView,
    },
    {
      path: '/worker-log-in',
      name: 'WorkerLogin',

      component: WorkerLogin,
    },
    {
      path: '/ApplicantRegistration',
      name: 'Regist',

      component: ApplicantRegistration,
    },
    {
      path: '/user-log-in',
      name: 'ApplicantLogin',

      component: UserLogin,
    },
    {
      path: '/user-list-ranking',
      name: 'UserList',

      component: UserList,
    },
    {
      path: '/apt-list',
      name: 'HouseList',

      component: HouseList,
    },
  ],
});

export default router;
