import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load(component) {
  // '@' is aliased to src/components
  return () => import(`@components/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),

  routes: [
    {
      path: '/',
      component: load('landing-page')
    },
    {
      path: '/game-manual',
      component: load('game-manual')
    },
    {
      path: '/scouting',
      component: load('scouting'),
      children: [
        {
          path: '/game-scouting',
          component: load('game-scouting')
        },
        {
          path: '/research',
          component: load('research')
        },
        {
          path: '/floor-scouting',
          component: load('floor-scouting')
        }
      ]
    },
    {
      path: '/settings',
      component: load('settings')
    },
    {
      path: '/templates',
      component: load('templates')
    },

    // Always leave this last one
    { path: '*', component: load('error-404') } // Not found
  ]
})
