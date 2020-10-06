<template>
  <div class="form">
    <h1>{{ title }}</h1>
    <p v-if="form">填写人： {{ SS.name }}</p>
    <form-component v-if="form" :form="form" />
  </div>
</template>

<script>
import FormComponent from '@/components/Form.vue'
const SS = window.sessionStorage

export default {
  name: 'Form',
  data: () => ({
    aid: '',
    SS: SS,
    title: '正在加载...',
    form: null,
    record: false,
    ticket: ''
  }),
  components: {
    FormComponent
  },
  mounted () {
    this.aid = this.$route.params.aid
    if (!SS.token) {
      this.title = '请先登录'
      window.location.href = '/user/#/?c=/form/%23/form/' + this.aid
      return
    }
    this.$ajax.get('/form?id=' + this.aid, { headers: { token: SS.token } })
      .then(resp => {
        this.record = resp.data.record
        this.title = resp.data.title
        this.form = JSON.parse(resp.data.form)
        this.ticket = resp.data.ticket
      })
      .catch(err => {
        this.title = err.response.data
      })
  }
}
</script>

<style scoped>
div.form {
  text-align: center;
  color: #333;
  background: #F2F2F2;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
