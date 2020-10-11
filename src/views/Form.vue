<template>
  <div class="form">
    <h1>{{ title }}</h1>
    <p v-if="form">填写人： {{ SS.name }}</p>
    <form-component v-if="form" :form="form" :record="record" @submit="submit" />
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title>学生事务系统</v-card-title>
        <v-card-text>{{ message }}</v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"   >确认</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
    ticket: '',
    dialog: false,
    message: ''
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
        this.record = JSON.parse(resp.data.record)
        this.title = resp.data.title
        this.form = JSON.parse(resp.data.form)
        this.ticket = resp.data.ticket
      })
      .catch(err => {
        this.title = err.response.data
      })
  },
  methods: {
    async submit (data) {
      try {
        await this.$ajax.post('/form', data, { headers: { ticket: this.ticket } })
        this.title = '表单提交成功'
        this.form = null
        await new Promise((resolve, reject) => { setTimeout(resolve, 1500) })
        window.location.href = '/'
      } catch (err) {
        this.dialog = true
        this.message = err.response.data
      }
    }
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
