<!--
 * @Author: xiongguangsen02 3096429133@qq.com
 * @Date: 2023-02-22 10:56:04
 * @LastEditors: xiongguangsen02 3096429133@qq.com
 * @LastEditTime: 2023-02-22 17:25:49
 * @FilePath: \测试用vue\vue-demo\src\views\layouts\UserLayout.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="userLayout" class="user-layout-wrapper">
    <div class="container">
      <div class="user-layout-content">
        <div class="header">
          <div class="top">
            <a href="">
              <!-- <img src="~@/assets/logo.svg" alt="antdesign图标"> -->
              <img src="~@/assets/background.svg" alt="antdesign图标">
              <span>Ant Design</span>
            </a>
          </div>
          <div class="dec">

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
};
</script>

<style lang="less" scoped>
.user-layout-wrapper {
  height: 100%;
  .container {
    width: 100%;
    min-height: 100%;
    background: #f0f2f5 no-repeat url(~@/assets/background.svg) 50% / 100%;
  }
}
</style>