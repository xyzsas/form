<template>
  <v-card style="width: 90%; max-width: 600px; padding: 5%; min-height: 80vh;">
    <v-form ref="form" style="min-height: 90%;">
      <template v-for="f in list">
        <v-text-field v-if="f.field === 'input'" dense outlined :label="f.label" :key="f.key" v-model="$data[f.key]" :rules="rules(f)"></v-text-field>
        <v-select v-if="f.field === 'select'" dense outlined :label="f.label" :items="f.items" :key="f.key" v-model="$data[f.key]" :rules="rules(f)"></v-select>
      </template>
    </v-form>
    <v-btn color="primary" @click="submit">提交</v-btn>
  </v-card>
</template>

<script>
// eslint seriously disturb functionality
/* eslint-disable */
const REQUIRED = v => !!v || '必填'

export default {
  name: 'Form',
  props: ['form', 'record'],
  data () {
    const res = {}
    for (const f of this.form) {
      if (f.key) res[f.key] = this.record[f.key] || ''
    }
    return res
  },
  computed: {
    list () {
      let res = []
      for (const f of this.form) {
        if (!(eval(f.hide))) res.push(f) 
      }
      return res
    }
  },
  methods: {
    rules (f) {
      if (!f.rules || !f.rules.length) return []
      else return f.rules.map(x => eval(x))
    },
    submit () {
      if (!this.$refs.form.validate()) return
      this.$emit('submit', this.$data)
    }
  }
}
/* eslint-enable */
</script>
