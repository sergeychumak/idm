<template>
  <div>
    <labelText :text="title" />
    <template v-if="isLoading">
      <div class="loader"></div>
    </template>
    <listsApplication
      :type="type"
      v-on:list-loading-success="listLoadingSuccess"
      v-on:list-loading-error="listLoadingError"
    />
  </div>
</template>

<script>
export default {
  name: 'ListApplication',
  props: {
    title: {
      type: String,
      default () { return '' }
    },
    type: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {
      isLoading: true
    }
  },
  components: {
    labelText: () => import('@/components/01_atom/labelText'),
    listsApplication: () => import('@/components/03_organism/listApplication')
  },
  methods: {
    listLoadingSuccess: function (count) {
      this.isLoading = false
    },
    listLoadingError: function (error) {
      this.isLoading = false
      console.log(error.response)
    }
  }
}
</script>

<style></style>
