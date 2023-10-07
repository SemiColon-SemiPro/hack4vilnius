import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import WorkerViewMain from '../views/WorkerViewMain.vue';
import ApplicantView from '../views/ApplicantView.vue';
import WorkerLogin from '../views/WorkerLogin.vue';
import UserLogin from '../views/UserLogin.vue';
import ApplicantRegistration from '../views/ApplicantRegistration.vue';
import UserList from '../views/userListRanking.vue';
import HouseList from '../views/housesList.vue';
import newUserList from '../views/newUserList.vue';
import waitingUserList from '../views/waitingUserList.vue';
import offeredUserList from '../views/offeredUserList.vue';
import acceptedOfferedUserList from '../views/acceptedOfferedUserList.vue';
import ThankYou from '../views/thankYou.vue';
import PropertiesApprove from '../views/propApprove.vue';
import MatchesApprove from '../views/matchApprove.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',

      component: HomeView,
    },
    {
      path: '/confirmation',
      name: 'Confirmation',

      component: ThankYou,
    },
    {
      path: '/incoming-properties',
      name: 'PropertiesToApprove',

      component: PropertiesApprove,
    },
    {
      path: '/matches',
      name: 'Matches',

      component: MatchesApprove,
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
    {
      path: '/user-list-ranking/new',
      name: 'newUserList',

      component: newUserList,
    },
    {
      path: '/user-list-ranking/waiting',
      name: 'waitingUserList',

      component: waitingUserList,
    },
    {
      path: '/user-list-ranking/offered',
      name: 'offeredUserList',

      component: offeredUserList,
    },
    {
      path: '/user-list-ranking/accepted',
      name: 'acceptedOfferedUserList',

      component: acceptedOfferedUserList,
    },
  ],
});

export default router;
