<!--
 * @Author: xiongguangsen02 3096429133@qq.com
 * @Date: 2023-02-22 10:56:04
 * @LastEditors: xiongguangsen02 3096429133@qq.com
 * @LastEditTime: 2023-03-01 14:05:17
 * @FilePath: \测试用vue\vue-demo\src\views\layouts\UserLayout.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="userLayout" class="user-layout-wrapper">
    <div class="container">
      <div class="user-layout-content">
        <div class="header">
          <div class="top">
            <a href="/user">
              <!-- <img src="~@/assets/logo.svg" alt="antdesign图标"> -->
              <img src="~@/assets/logo.svg" alt="antdesign图标" class="logo" />
              <span class="title">Ant Design</span>
            </a>
          </div>
          <div class="dec">Ant Design is the most influential web design specification in Xihu district</div>
        </div>
        <router-view />
        <div class="footer">
          <div class="top-text">
            <a href="/user">帮助</a>
            <a href="/user">隐私</a>
            <a href="/user">条款</a>
          </div>
          <div class="bottom-text">
            Copyright © 2018 vueComponent
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserLayout",
  methods: {
    // consoleMethod() {
    //   let objA = {
    //     a: 1,
    //     b: 2,
    //     c: {
    //       d: 6,
    //     },
    //     g: {
    //       gg: 99
    //     }
    //   };

    //   console.log(111,objA);

    //   let objB = objA;

    //   let {a, b, c, g} = objA

    //   a=44
    //   g.gg = 11
    //   console.log(g);

    //   objB.b = 3;
    //   objB.c = { f: 7 };

    //   console.log(222,objA);

    //   console.log(333,objB);
    // },
  },
  created() {
    // this.consoleMethod()
  },
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
            margin-right: 16px;
          }

          .title {
            font-size: 33px;
            color: rgba(0, 0, 0, 0.85);
            font-family: Avenir, "Helvetica Neue", Arial, Helvetica, sans-serif;
            font-weight: 600;
            position: relative;
            top: 2px;
          }
        }

        .dec {
          color: rgba(0, 0, 0, 0.45);
          font-size: 14px;
          margin: 12px auto 40px;
        }
      }

      .footer {
        margin: 48px auto 24px;
        text-align: center;

        .top-text {
          margin-bottom: 8px;

          a {
            color: rgba(0, 0, 0, 0.45);
            font-size: 14px;
            &:not(:last-child) {
              margin-right: 40px;
            }
          }
        }

        .bottom-text {
          color: rgba(0, 0, 0, 0.45);
          font-size: 14px;
        }
      }
    }
  }
  a {
    text-decoration: none;
  }
}
</style>