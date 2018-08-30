import Vue from 'vue'
import Router from 'vue-router'
import Notes from '@/components/Notes'
import Note from '@/components/Note'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Notes',
      component: Notes
    },
    {
      path: '/note/:id',
      name: 'Note',
      props: true,
      component: Note
    }
  ],
  mode: 'history'
})
