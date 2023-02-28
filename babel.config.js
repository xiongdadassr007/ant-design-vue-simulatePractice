/*
 * @Author: xiongguangsen02 3096429133@qq.com
 * @Date: 2023-02-21 15:34:35
 * @LastEditors: xiongguangsen02 3096429133@qq.com
 * @LastEditTime: 2023-02-28 17:24:46
 * @FilePath: \测试用vue\vue-demo\babel.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: "css" }
    ]
  ]
}
