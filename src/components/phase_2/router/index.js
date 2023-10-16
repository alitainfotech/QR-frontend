import Phase0_1Screen1 from '../views/phase0-1/Screen1.vue'
import Phase0_1Screen2 from '../views/phase0-1/Screen2.vue'
import Phase0_2Screen1 from '../views/phase0-2/Screen1.vue'
import Phase0_3Screen1 from '../views/phase0-3/Screen1.vue'
import Phase1_2_3Screen1 from '../views/phase_1_2_3/Screen1.vue'
import Phase1_2_3Screen2 from '../views/phase_1_2_3/Screen2.vue'
const route =[
    {
        path: '/phase-0-1-screen1',
        name: 'phase-0-1-screen1',
        component: Phase0_1Screen1
      },
      {
        path: '/phase-0-1-screen2',
        name: 'phase-0-1-screen2',
        component: Phase0_1Screen2
      },
      {
        path: '/phase-0-2-screen1',
        name: 'phase-0-2-screen1',
        component: Phase0_2Screen1
      },
      {
        path: '/phase-0-3-screen1',
        name: 'phase-0-3-screen1',
        component: Phase0_3Screen1
      },
      {
        path: '/phase-1-2-3-screen1',
        name: 'phase-1-2-3-screen1',
        component: Phase1_2_3Screen1
      },
      {
        path: '/phase-1-2-3-screen2',
        name: 'phase-1-2-3-screen2',
        component: Phase1_2_3Screen2
      },
]
export default route