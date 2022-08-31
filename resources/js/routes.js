
let login=require('./components/auth/login.vue').default;
let registration=require('./components/auth/registration.vue').default;


export const routes = [
    { path: '/', component: login, name: '/' },
    { path: '/registration', component: registration, name: 'registration' },
  ]
  