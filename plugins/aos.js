import Vue from 'vue';
import AOS from 'aos';

Vue.use(AOS.init({
   once: true,
   offset: -100,
}));