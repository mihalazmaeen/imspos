
let login=require('./components/auth/login.vue').default;
let registration=require('./components/auth/registration.vue').default;
let resetPassword=require('./components/auth/resetPassword.vue').default; 
let home=require('./components/home.vue').default; 


export const routes = [
    { path: '/', component: login, name: '/' },
    { path: '/registration', component: registration, name: 'registration' },
    { path: '/resetPassword', component: resetPassword, name: 'resetPassword' },
    { path: '/home', component: home, name: 'home' }
  ]
  