<template>
  <div class="finish">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
const sleep = (timeout) => new Promise((resolve) => {
  setTimeout(resolve, timeout)
})

export default {
  data () {
    return {
      title: this.$store.state.tip
    }
  },
  async mounted () {
    await sleep(1000)
    window.location.href = '/form/#/'
  }
}
</script>

<style scoped>
div.finish {
  color: #555;
  width: 100%;
  min-height: 100vh;
  padding: 30px 3%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>
