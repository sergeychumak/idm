<template>
  <div>
    <div id="app__left" style="padding: 20px;">
      <ul>
        <router-link v-for="item in MENUDATA" :key="item.id" :to="item.url"><li>{{item.label}}</li></router-link>
      </ul>
      <router-link to="add_new_request">{{this.LANGDATA.CREATE_QUERY}}</router-link>
    </div>
    <div id="app__right" style="padding: 20px;">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Index',
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
