<!--
 * @Author: xiongguangsen02 3096429133@qq.com
 * @Date: 2023-02-21 15:34:35
 * @LastEditors: xiongguangsen02 3096429133@qq.com
 * @LastEditTime: 2023-03-30 13:44:50
 * @FilePath: \测试用vue\vue-demo\src\views\Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import md5 from "md5";

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      password: 123456,
      a: 4
    }
  },
  methods: {
    mdpassword(value) {
      console.log(md5(value));
    },
    testFor() {  
      var _this = this
      function foo() {
          // debugger
          console.log(_this.a);
      }
      var a = 2;

      foo(); // 2 
   
    }
  },
  created() {
    // this.mdpassword(this.password)
    this.testFor()
    // (function (a = "oops, global") {
    //   function foo() {
    //       console.log(this.a);
    //   }

    //   var obj = {
    //       a: 2,
    //       foo: foo
    //   };

    //   var bar = obj.foo; // 函数别名！

    //   var a = "oops, global"; // a是全局对象的属性

    //   bar(); // "oops, global"
    // })()
  }
}
</script>
