import Vue from 'vue';
import VueRouter from 'vue-router';
import Clientes from '../components/Clientes.vue';
import Categorias from '../components/Categorias.vue';
import ModoDePago from '../components/ModoDePago.vue';
import Productos from '../components/Productos.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/clientes', component: Clientes },
  { path: '/categorias', component: Categorias },
  { path: '/modo-de-pago', component: ModoDePago },
  { path: '/productos', component: Productos },
];

const router = new VueRouter({
  routes
});

export default router;
