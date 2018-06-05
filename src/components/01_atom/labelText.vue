<template>
  <div :class="classNameData()">{{text}}</div>
</template>

<script>
export default {
  name: 'LabelText',
  props: {
    'className': {
      type: String,
      default () { return '' }
    },
    'text': {
      type: String,
      required: true
    },
    'size': {
      type: String,
      default () { return 'S' }
    }
  },
  methods: {
    classNameData: function () {
      return this.className + ' labelText_' + this.size
    }
  }
}
</script>

<style></style>
