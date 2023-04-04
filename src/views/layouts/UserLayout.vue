<!--
 * @Author: xiongguangsen02 3096429133@qq.com
 * @Date: 2023-02-22 10:56:04
 * @LastEditors: xiongguangsen02 3096429133@qq.com
 * @LastEditTime: 2023-04-04 16:28:38
 * @FilePath: \测试用vue\vue-demo\src\views\layouts\UserLayout.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="userLayout" class="user-layout-wrapper">
    <div class="container">
      <div class="user-layout-content">
        <div class="header">
          <div class="top">
            <a href="/">
              <!-- <img src="~@/assets/logo.svg" alt="antdesign图标"> -->
              <img src="~@/assets/logo.svg" alt="antdesign图标" class="logo">
              <span class="title">Ant Design</span>
            </a>
          </div>
          <div class="dec">
            Ant Design
          </div>
        </div>
        <router-view />
        <div class="footer">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserLayout",
  methods: {
    
  },
  created() {
    console.log(111111111111111111777777777777777);
    console.log(77777777777777,222222);
    console.log(333333333333333333333333);
  }
};
</script>

<style lang="less" scoped>
.user-layout-wrapper {
  height: 100%;
  .container {
    width: 100%;
    min-height: 100%;
    background: #f0f2f5 no-repeat url(~@/assets/background.svg) 50%/100%;

    .user-layout-content {
      padding: 72px 0 20px;
      .header {
        text-align: center;

        .top {
          height: 44px;
          line-height: 44px;
          
          .logo {
            height: 44px;
            vertical-align: top;
          }

          .title {
            font-size: 33px;
            color: rgba(0, 0, 0, .85);
            font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
            font-weight: 600;
            // position: relative;
            // top: 2px;
          }
        }

        .dec {
          line-height: 60px;
          font-size: 16px;
        }
      }
    }
  }
  a {
    text-decoration: none;
  }
}
</style>