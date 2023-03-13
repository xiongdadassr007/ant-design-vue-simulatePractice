/*
 * @Author: xiongguangsen02 3096429133@qq.com
 * @Date: 2023-02-21 15:34:35
 * @LastEditors: xiongguangsen02 3096429133@qq.com
 * @LastEditTime: 2023-03-01 17:00:10
 * @FilePath: \测试用vue\vue-demo\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, message, Form, Input, Icon, Tabs, Checkbox } from 'ant-design-vue';


Vue.config.productionTip = false

Vue.use(Button);
Vue.use(Form);
Vue.use(Input);
Vue.use(Icon);
Vue.use(Tabs);
Vue.use(Checkbox);

Vue.prototype.$message = message;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
