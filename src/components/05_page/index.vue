<template>
  <div>
    test
    <Table />
    <Table />
    <Table />
  </div>
</template>

<script>

export default {
  name: 'Index',
  components: {
    Table: () => import('@/components/00_base/Table')
  },
  mounted: function () {
    // console.log(this.$store.state.config.label)
  }
}
</script>

<style></style>
