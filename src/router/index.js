import { createRouter, createWebHistory } from 'vue-router'
import SelectUser from '../views/SelectUser.vue'
import PhaseScreen1 from '../views/PhaseScreen1.vue'
import PhaseScreen1_1 from '../views/PhaseScreen1-1.vue'
import PhaseScreen2 from '../views/PhaseScreen2.vue'
import PhaseScreen2_1 from '../views/PhaseScreen2-1.vue'
import PhaseScreen3 from '../views/PhaseScreen3.vue'
import PhaseScreen3_1 from '../views/PhaseScreen3-1.vue'
import PhaseScreen4 from '../views/PhaseScreen4.vue'
import PhaseScreen4_1 from '../views/PhaseScreen4-1.vue'
import PhaseDialogScreen from '../views/PhaseDialogScreen.vue'
import Phase1Screen1 from '../views/phase1/Screen1.vue'
import Phase1Screen2 from '../views/phase1/Screen2.vue'
import Phase1Screen3 from '../views/phase1/Screen3.vue'
import Phase1Screen4 from '../views/phase1/Screen4.vue'
import Phase1Screen5 from '../views/phase1/Screen5.vue'
import Phase1Screen6 from '../views/phase1/Screen6.vue'
import Phase2Screen1 from '../views/phase2/Screen1.vue'
import Phase2Screen2 from '../views/phase2/Screen2.vue'
import Phase2Screen3 from '../views/phase2/Screen3.vue'
import Phase2Screen4 from '../views/phase2/Screen4.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'select-user',
      component: SelectUser
    },
    {
      path: '/phase-screen-1',
      name: 'phase-screen-1',
      component: PhaseScreen1
    },
    {
      path: '/phase-screen-1-1',
      name: 'phase-screen-1-1',
      component: PhaseScreen1_1
    },
    {
      path: '/phase-screen-2',
      name: 'phase-screen-2',
      component: PhaseScreen2
    },
    {
      path: '/phase-screen-2-1',
      name: 'phase-screen-2-1',
      component: PhaseScreen2_1
    },
    {
      path: '/phase-screen-3',
      name: 'phase-screen-3',
      component: PhaseScreen3
    },
    {
      path: '/phase-screen-3-1',
      name: 'phase-screen-3-1',
      component: PhaseScreen3_1
    },
    {
      path: '/phase-screen-4',
      name: 'phase-screen-4',
      component: PhaseScreen4
    },
    {
      path: '/phase-screen-4-1',
      name: 'phase-screen-4-1',
      component: PhaseScreen4_1
    },
    {
      path: '/dialog-screen',
      name: 'dialog-screen',
      component: PhaseDialogScreen
    },
    {
      path: '/phase-1-screen-1',
      name: 'phase-1-screen-1',
      component: Phase1Screen1
    },
    {
      path: '/phase-1-screen-2',
      name: 'phase-1-screen-2',
      component: Phase1Screen2
    },
    {
      path: '/phase-1-screen-3',
      name: 'phase-1-screen-3',
      component: Phase1Screen3
    },
    {
      path: '/phase-1-screen-4',
      name: 'phase-1-screen-4',
      component: Phase1Screen4
    },
    {
      path: '/phase-1-screen-5',
      name: 'phase-1-screen-5',
      component: Phase1Screen5
    },
    {
      path: '/phase-1-screen-6',
      name: 'phase-1-screen-6',
      component: Phase1Screen6
    },
    {
      path: '/phase-2-screen-1',
      name: 'phase-2-screen-1',
      component: Phase2Screen1
    },
    {
      path: '/phase-2-screen-2',
      name: 'phase-2-screen-2',
      component: Phase2Screen2
    },
    {
      path: '/phase-2-screen-3',
      name: 'phase-2-screen-3',
      component: Phase2Screen3
    },
    {
      path: '/phase-2-screen-4',
      name: 'phase-2-screen-4',
      component: Phase2Screen4
    },
  ]
})

export default router
