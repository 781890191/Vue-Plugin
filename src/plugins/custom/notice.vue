<template>
  <div class="notice">
    <div
      :class="['default', animate ? 'fadeInDown' : 'fadeOutUp']"
      :style="`background:${color}`"
      v-text="matter"
      v-if="reveal"
    />
  </div>
</template>

<script>
export default {
  name: "notice",
  data: () => ({
    color: "",
    matter: "",
    value: false,
    reveal: false,
    animate: false,
  }),
  watch: {
    value(v) {
      if (v) {
        // 展示
        this.reveal = this.animate = true;
        // 隐藏
        setTimeout(() => (this.value = false), 4000);
      } else {
        // 过渡
        this.animate = false;
        // 隐藏
        setTimeout(() => (this.reveal = false), 300);
      }
    },
  },
};
</script>

<style scoped>
.notice {
  top: 25px;
  left: 0px;
  right: 0px;
  z-index: 9999;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
}
.default {
  height: 50px;
  display: flex;
  color: #ffffff;
  padding: 15px 25px;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
}
.fadeOutUp {
  animation: fadeOutUp 0.3s;
}
.fadeInDown {
  animation: fadeInDown 0.3s;
}
@keyframes fadeOutUp {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
}
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
