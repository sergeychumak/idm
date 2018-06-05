<template>
  <div>
    page not fount
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Index',
  data: function () {
    return {}
  },
  components: {
    // Table: () => import('@/components/00_base/Table')
  },
  mounted: function () {},
  computed: {
    ...mapGetters([
      'LANGDATA',
      'MENUDATA'
    ])
  }
}
</script>

<style></style>
