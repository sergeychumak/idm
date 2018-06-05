<template>
  <div>

    <test>
      <template slot="top-bun" v-if="isLoading">777</template>
    </test>


    <template v-if="isLoading">
      <div class="loader"></div>
    </template>
    <template v-else>
      <div class="userInfoWrap">
        <div class="userInfoWrap__avatar"></div>
        <labelText :text="LANGDATA.ACCESS_CONTROL" />
        <labelText :text="userInfo.name" :size="'XL'" />
        <div class="userInfoWrap__applicationsConsistently">
          <labelText :text="LANGDATA.TEXT.APPLICATIONS_CONSISTENTLY" />
          <labelText :text="(userInfo.fields.applicationsConsistently).toString()" />
        </div>
        <div class="userInfoWrap__applicationsConsistently">
          <labelText :text="LANGDATA.TEXT.PENDING_ACCESS_REQUESTS" />
          <labelText :text="(userInfo.fields.pendingAccessRequests).toString()" />
        </div>
      </div>
      <listApplication
        :title="LANGDATA.TEXT.SELECTED_APPLICATIONS_AND_ROLES"
        :type="'USER_APPLICATION'"
      />
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Index',
  data: function () {
    return {
      isLoading: true,
      'userInfo': {}
    }
  },
  components: {
    labelText: () => import('@/components/01_atom/labelText'),
    test: () => import('@/components/01_atom/test'),
    listApplication: () => import('@/components/04_template/listApplication')
  },
  mounted: function () {
    this
      .$store
      .dispatch('getData', {type: 'USER_INFO'})
      .then(response => {
        this.isLoading = false
        this.userInfo = response
      })
  },
  computed: {
    ...mapGetters([
      'LANGDATA'
    ])
  }
}
</script>

<style></style>
