
let login=require('./components/auth/login.vue').default;
let signup=require('./components/auth/registration.vue').default;
let resetPassword=require('./components/auth/resetPassword.vue').default; 
let logout=require('./components/auth/logout.vue').default;
let home=require('./components/home.vue').default; 


export const routes = [
    { path: '/', component: login, name: '/' },
    { path: '/signup', component: signup, name: 'signup' },
    { path: '/resetPassword', component: resetPassword, name: 'resetPassword' },
    { path: '/logout', component: logout, name: 'logout' },
    { path: '/home', component: home, name: 'home' }
  ]
  