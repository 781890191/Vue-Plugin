<template>
  <div class="home">
     <button @click="success()" class='btn1' type="button">Click success!</button>
     <button @click="normal()" class='btn2' type="button">Click normal!</button>
     <button @click="error()" class='btn3' type="button">Click error!</button>
     <button @click="info()" class='btn4' type="button">Click info!</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    success() {
      this.$notice.success('success')
    },
    normal() {
      this.$notice.normal('normal')
    },
    error() {
      this.$notice.error('error')
    },
    info() {
      this.$notice.info('info')
    }
  }
}
</script>
<style scoped>
.home {
  display: flex;
  flex-direction: column;       
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 600px;
  margin: 0 auto;
  background-color: #E0E0E0; 
}
.btn1 {
  width: 200px;
  height: 30px;
  margin: 20px;
  background:#4CAF50;
}
.btn2 {
  width: 200px;
  height: 30px;
  margin: 20px;
  background:#009688;
}
.btn3 {
  width: 200px;
  height: 30px;
  margin: 20px;
  background:#FF5722;
}
.btn4 {
  width: 200px;
  height: 30px;
  margin: 20px;
  background:#00BCD4;
}
</style>