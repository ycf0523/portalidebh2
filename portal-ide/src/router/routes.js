
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/inicio.vue') },
      //{ path: '/servicios', component: () => import('src/pages/servicios.vue') },
      { path: '/blog', component: () => import('src/pages/blog.vue') },
      { path: '/moodle', component: () => import('src/pages/moodle.vue') },
      { path: '/mapas', component: () => import('src/pages/mapas.vue') },
      { path: '/noticias', component: () => import('src/pages/noticias.vue') },
      { path: '/ayuda', component: () => import('src/pages/ayuda.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
