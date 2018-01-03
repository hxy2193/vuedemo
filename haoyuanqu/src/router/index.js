import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import yuanquTab from '@/components/yuanquTop'

import index from '@/components/index'
import park from '@/components/park'
import tutor from '@/components/tutor'
import service from '@/components/service'
import activity from '@/components/activity'
import capital from '@/components/capital'
import enterprise from '@/components/enterprise'
import information from '@/components/information'
import demo from '@/components/demo'
Vue.use(Router)

export default new Router({
  routes: [
        {
          path: '/',
          name:'demo',
          component: demo,
          children:[
            {
              path: '',
              name:'index',
              component: index,
            },
            {
              path: '／park',
              name:'park',
              component: park,
            },
            {
              path: '/tutor',
              name:'tutor',
              component: tutor,
            },
            {
              path: '/service',
              name:'service',
              component: service,
            },
            {
              path: '/activity',
              name:'activity',
              component: activity,
            },
          ]
        }

        // {
        //
        // },
        // {
        //   path: '/park',
        //   name:'park', component: park
        // },
        // {
        //   path: '/tutor',
        //   name:'tutor', component: tutor
        // },
        // {
        //   path: '/activity',
        //   name:'activity', component: activity
        // },
        // {
        //   path: '/service',
        //   name:'service', component: service
        // },
        // {
        //   path: '/capital',
        //   name:'capital', component: capital
        // },
        // {
        //   path: '/enterprise',
        //   name:'enterprise', component: enterprise
        // },
        // {
        //   path: '/information',
        //   name:'information', component: information
        // }


]

})
