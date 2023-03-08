<!--
 * @Author: xiongguangsen02 3096429133@qq.com
 * @Date: 2023-02-22 10:41:45
 * @LastEditors: xiongguangsen02 3096429133@qq.com
 * @LastEditTime: 2023-03-08 17:29:28
 * @FilePath: \测试用vue\vue-demo\src\views\user\Login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="login-account">
    <!-- 登录页面检验输入页 -->
    <a-form
      id="loginForm"
      ref="loginForm"
      class="login-form-verify"
      :form="form"
      @submit="handleSubmit"
    >
      <a-tabs 
        :activeKey="activeTabkey" 
        @change="tabSwitchCallback"
        :tabBarStyle="{ borderBottom: 'unset', textAlign: 'center' }">
        <a-tab-pane key="Tab1" tab="Credentials">
          <a-form-item>
            <a-input
              type="text"
              v-decorator="[
                'username',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Please enter account name or email address!',
                    },
                  ],
                  validateTrigger: 'change',
                },
              ]"
              placeholder="Account: admin"
              size="large"
            >
              <a-icon type="user" slot="prefix" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input-password
              v-decorator="[
                'password',
                {
                  rules: [
                    { required: true, message: 'Please enter your password!' },
                  ],
                  validateTrigger: 'blur',
                },
              ]"
              placeholder="password: admin or ant.design"
              size="large"
            >
              <a-icon type="lock" slot="prefix" />
            </a-input-password>
          </a-form-item>
        </a-tab-pane>
        <a-tab-pane key="Tab2" tab="Mobile number">
          Content of Tab Pane 2
        </a-tab-pane>
      </a-tabs>
      <a-form-item>
        <a-checkbox
          v-decorator="[
            'rememberMe',
            {
              valuePropName: 'checked'
            },
          ]"
        >
          Remember me
        </a-checkbox>
        <router-link class="login-form-forgot" to=""> Forgot your password? </router-link>
      </a-form-item>
      <a-form-item style="margin-top: 24px;">
        <a-button 
          size="large" 
          :loading="state.btnState"
          :disabled="state.btnState"
          type="primary" 
          html-type="submit" 
          class="login-form-button">
          Login
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: this.$form.createForm(this),
      activeTabkey: "Tab1",
      state: {
        btnState: false
      }
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    tabSwitchCallback(key) {
      this.activeTabkey = key;
    },
  },
};
</script>

<style lang="less" scoped>
.login-account {
  margin: 0 auto;
  width: 368px;
  min-width: 260px;

  .login-form-forgot {
    font-size: 14px;
    color: #1890ff;
    float: right;
  }

  .login-form-button {
    width: 100%;
  }
}
</style>