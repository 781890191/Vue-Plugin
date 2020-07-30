"use strict";

// 原型
const Plugin = {};
// 全局实例对象
import Vue from "vue";
// 插件模板
import notice from "./notice.vue";

Plugin.install = function(Vue) {
  // 全局扩展子类
  const constructor = Vue.extend(notice);
  // 实例化并绑定动态节点
  const instance = new constructor().$mount(document.createElement("div"));
  // 全局存放该子类
  document.body.appendChild(instance.$el);
  // 挂载原型 全局调用
  Object.defineProperties(Vue.prototype, {
    $notice: {
      get() {
        return {
          success: matter => {
            instance.value = true;
            instance.matter = matter;
            instance.color = "#4CAF50";
          },
          normal: matter => {
            instance.value = true;
            instance.matter = matter;
            instance.color = "#009688";
          },
          error: matter => {
            instance.value = true;
            instance.matter = matter;
            instance.color = "#FF5722";
          },
          info: matter => {
            instance.value = true;
            instance.matter = matter;
            instance.color = "#00BCD4";
          }
        };
      }
    }
  });
};

Vue.use(Plugin);

export default Plugin;
