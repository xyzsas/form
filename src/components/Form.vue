<template>
  <v-card style="width: 90%; max-width: 600px; padding: 5%; min-height: 80vh;">
    <v-form>
      <template v-for="f in list">
        <v-text-field v-if="f.field === 'input'" dense outlined :label="f.label" :key="f.key" v-model="$data[f.key]" :rules="rules(f)"></v-text-field>
      </template>
    </v-form>
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
      if (f.key) res[f.key] = ''
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
    }
  }
}
/* eslint-enable */
</script>
