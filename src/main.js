/* import Vue from 'vue'
import App from './App.vue'


 Vue.directive("colorF", {
   bind(el, binding,vnode)
   {
     if(binding.modifiers["delay"])
     {
       setTimeout(()=>{
         if(binding.arg=='back')
           el.style.backgroundColor=binding.value;
         else
           el.style.backgroundColor='black';
       },10000)
     }else
     {
       if(binding.arg=='back')
         el.style.backgroundColor=binding.value;
       else
         el.style.backgroundColor='black';
     }



   }
 });

new Vue({
  el: '#app',
  render: h => h(App)
})
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')