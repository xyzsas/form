<template>
  <div class="form">
    <h1>{{ title }}</h1>
    <p v-if="name">填写人：{{ name }}</p>
    <v-form ref="form" style="width: 100%;">
      <v-card v-for="(s, i) in form" :key="i" style="width: 100%; margin: 30px auto; padding: 10px 5%; max-width: 500px;">
        <div v-for="(f, j) in s" :key="j">
          <v-card-title v-if="f.title">{{ f.title }}</v-card-title>
          <v-text-field v-if="f.input" outlined dense v-model="input[f.input]" :label="f.input" :type="f.type || 'text'" :rules="[rule(f, f.input)]"></v-text-field>
          <v-select v-if="f.select" outlined dense v-model="input[f.select]" :items="f.items" :label="f.select" :rules="[rule(f, f.select)]"></v-select>
        </div>
      </v-card>
      <v-btn v-if="form" color="primary" fab large @click="submit" :loading="loading">
        <v-icon>mdi-check</v-icon>
      </v-btn>
    </v-form>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title>学生事务系统</v-card-title>
        <v-card-text>{{ message }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="back">确定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import form from '../form.js'

const SS = window.sessionStorage

export default {
  name: 'Home',
  data: () => ({
    loading: false,
    success: false,
    dialog: false,
    message: '',
    name: SS.name,
    form: null,
    title: '新生信息采集',
    input: {}
  }),
  mounted () {
    if (!SS.token) {
      window.location.href = '/user/#/?c=/form/'
      this.title = '请先登录'
      return
    }
    this.render(form)
    this.$ajax.get('/form/form?id=test&record=1', { headers: { token: SS.token } })
      .then(resp => { this.input = resp.data })
      .catch(console.log)
  },
  methods: {
    render (form) {
      this.form = []
      for (const f of form) {
        if (f.title) this.form.push([f])
        else this.form[this.form.length - 1].push(f)
      }
    },
    rule (f, key) {
      if (f.optional) return true
      if (!this.input[key]) return '必填'
      else return true
    },
    async submit () {
      if (!this.$refs.form.validate()) return
      this.loading = true
      // here
      const res = await this.$ajax
        .post('/form/form?id=test', this.input, {
          headers: { token: SS.token }
        })
        .then(resp => {
          this.success = true
          return resp.data
        })
        .catch(err => err.response.data)
      this.loading = false
      this.dialog = true
      this.message = res
    },
    back () {
      this.dialog = false
      if (this.success) window.location.href = '/index.html'
    }
  }
}
</script>

<style scoped>
  div.form {
    padding: 30px;
    color: #333;
    background: #F2F2F2;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
