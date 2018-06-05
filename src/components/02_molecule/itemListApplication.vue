<template>
  <div class="itemListApplication" @click="itemClick">
    <template v-if="isFolder"><div class="itemListApplication__folder"></div></template>
    <labelText :text="name" :size="'L'" :className="'itemListApplication__name'" />
    <labelText :text="desc" :className="'itemListApplication__description'" />
    <labelText :text="count.toString()" :size="'L'" :className="'itemListApplication__count'" />
  </div>
</template>

<script>
export default {
  name: 'ItemListApplication',
  props: {
    id: {
      type: String
    },
    name: {
      type: String
    },
    desc: {
      type: String
    },
    count: {
      type: Number
    },
    isFolder: {
      type: Boolean,
      default () { return false }
    }
  },
  components: {
    labelText: () => import('@/components/01_atom/labelText')
  },
  methods: {
    itemClick: function () {
      this.$emit('itemClick', {id: this.id})
    }
  }
}
</script>

<style></style>
