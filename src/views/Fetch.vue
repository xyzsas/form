<template>
  <div class="fetch">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
const SS = window.sessionStorage
const sleep = (timeout) => new Promise((resolve) => {
  setTimeout(resolve, timeout)
})

export default {
  data () {
    return {
      title: '正在获取表单数据',
      id: this.$route.params.aid
    }
  },
  async mounted () {
    if (!SS.token) {
      this.title = '请先登录'
      await sleep(1000)
      window.location.href = '/user/#/?c=/form/%23/fetch/' + this.$route.params.aid
      return
    }
    try {
      const { data } = await this.$ajax({
        method: 'GET',
        url: `/form?id=${this.$route.params.aid}`,
        headers: { token: SS.token }
      })
      if (data.record) {
        this.title = '您已经填写过此表单'
        await sleep(1000)
        window.location.href = '/form'
        return
      }
      this.$store.state.aid = this.$route.params.aid
      this.$store.state.form = JSON.parse(data.form)
      this.$store.state.ticket = data.ticket
      this.$router.push('/form/main')
    } catch (err) {
      this.title = err.response.data
      await sleep(1000)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
div.fetch {
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
