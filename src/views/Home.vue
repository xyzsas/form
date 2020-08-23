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
      <v-btn v-if="form" color="primary" large @click="submit" :loading="loading">提交</v-btn>
    </v-form>
  </div>
</template>

<script>
import form from '../form.js'

const SS = window.sessionStorage

export default {
  name: 'Home',
  data: () => ({
    loading: false,
    name: SS.name,
    form: null,
    title: '新生信息采集',
    input: {}
  }),
  mounted () {
    if (!SS.token) {
      window.location.href = '/user/#/?c=/form/'
      this.title = '请先登录'
    } else {
      this.render(form)
    }
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
