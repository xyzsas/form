<template>
  <div class="form">
    <h1>{{ title }}</h1>
    <v-form ref="form" style="width: 100%;">
      <v-card style="width: 100%; margin: 30px auto; padding: 30px; max-width: 900px; text-align: left;">
        <div v-for="(i, indexI) in formData" :key="indexI">
          <template v-if="cond(i.cond)">
            <template v-if="indexI">
              <v-divider style="margin: 8px 0;"></v-divider>
              <h3>{{ i.title }}</h3>
              <p>{{ i.remark }}</p>
            </template>
            <v-text-field
              v-if="i.field === 'input'"
              outlined
              dense
              :type="i.type"
              :rules="[rule(i, indexI)]"
              v-model="input[indexI]"
            >
            </v-text-field>

            <v-textarea
              v-if="i.field === 'textarea'"
              outlined
              dense
              auto-grow
              counter
              :rules="[rule(i, indexI)]"
              v-model="input[indexI]"
            >
            </v-textarea>

            <v-select
              v-if="i.field === 'select'"
              outlined
              dense
              :items="i.items"
              :rules="[rule(i, indexI)]"
              v-model="input[indexI]"
            >
            </v-select>

            <v-radio-group
              v-if="i.field === 'radio'"
              dense
              :mandatory="false"
              :rules="[rule(i, indexI)]"
              v-model="input[indexI]"
            >
              <v-radio
                v-for="(j, indexJ) in i.values"
                :key="indexJ"
                :label="j + ' ' + i.items[indexJ]"
                :value="j"
              ></v-radio>
            </v-radio-group>

            <div v-if="i.field === 'checkbox'">
              <p v-for="(j, indexJ) in i.values" :key="indexJ" style="margin-bottom: 8px;">
                {{ j }} {{ i.items[indexJ] }}
              </p>
              <v-combobox
                dense
                outlined
                multiple
                :items="i.values"
                v-model="input[indexI]"
                :rules="[rule(i, indexI)]"
              >
              </v-combobox>
            </div>
          </template>
        </div>
        <v-divider style="margin: 8px 0;"></v-divider>
      </v-card>
    </v-form>
    <v-btn fab color="primary" @click="next">
      <v-icon>mdi-arrow-right</v-icon>
    </v-btn>
  </div>
</template>

<script>
// TODO: 题目显示的条件
export default {
  data () {
    return {
      id: null,
      formData: null,
      title: null,
      input: []
    }
  },
  mounted () {
    this.init()
  },
  watch: {
    $route (to, from) {
      this.init()
    }
  },
  computed: {
    cond () {
      return function (c) {
        if (!c) return true
        for (const v of c) {
          if (this.judge(v)) {
            return true
          }
        }
        return false
      }
    }
  },
  methods: {
    init () {
      this.id = this.$route.params.fid
      if (!this.$store.state.form) this.$router.push('/')
      this.formData = this.$store.state.form[this.id]
      this.title = this.formData[0].title
      this.input = []
      this.$refs.form.resetValidation()
    },
    rule (i, indexI) {
      if (i.rules.required && !this.input[indexI]) return '此项必填'
      if (i.rules.minSelect && this.input[indexI].length < i.rules.minSelect) return `最少选择${i.rules.minSelect}项`
      if (i.rules.maxSelect && this.input[indexI].length > i.rules.maxSelect) return `最多选择${i.rules.maxSelect}项`
      if (i.rules.maxLength && this.input[indexI].length > i.rules.maxLength) return `最多${i.rules.maxLength}字符`
      return true
    },
    judge (c) {
      for (const v of c) {
        let f
        switch (v[1]) {
          case 'is':
            f = this.input[v[0]] === v[2]
            break
          case '!is':
            f = this.input[v[0]] !== v[2]
            break
          case 'in':
            f = this.input[v[0]] && this.input[v[0]].indexOf(v[2]) !== -1
            break
          case '!in':
            f = !this.input[v[0]] || this.input[v[0]].indexOf(v[2]) === -1
            break
          default:
            f = false
        }
        if (!f) return false
      }
      return true
    },
    next () {
      if (!this.$refs.form.validate()) return
      this.$store.state.data[this.id] = this.input
      const queue = this.formData[0].queue
      for (const s of queue) {
        if (this.judge(s.c)) {
          this.$store.state.queue.push(...s.p)
        }
      }
      if (this.$store.state.queue.length === 0) {
        // submit
        console.log(this.$store.state.data)
      } else {
        // console.log(this.$store.state.queue)
        const nxid = this.$store.state.queue.shift()
        this.$router.push('/form/' + nxid)
      }
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
