<template>
  <div v-if="items.length > 0">
    <template v-for="item in items">
      <itemListApplication
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :desc="item.description"
        :count="item.count"
        :isFolder="item.isFolder"
        v-on:itemClick="itemClick"
      />
      <template v-if="item.id === applicationId && !showEditType">
        <div class="itemApplication">
          <template v-if="isLoadingItem">
            <div class="itemApplication__loader"><div class="loader"></div></div>
          </template>
          <template v-else>
            <div class="itemApplication__top">
              <div>{{itemData.name}}</div>
              <div>{{itemData.user.login}}</div>
              <div>{{LANGDATA.TEXT.ROLES}}: {{countSelectedApplication}} из {{countApplication}}</div>
            </div>
            <div class="itemApplication__content">
              <div>{{itemData.description}}</div>
              <template v-for="itemApplication in itemData.list">
                <div v-if="itemApplication.selected">{{itemApplication.name}}</div>
              </template>
            </div>
            <div class="itemApplication__bottom">
              <button @click="toggleViewType()">{{LANGDATA.TEXT.EDIT}}</button>
            </div>
          </template>
        </div>
      </template>
      <template v-if="item.id === applicationId && showEditType">
        <div class="itemApplication">
            <div class="itemApplication__top">
              <div>{{itemData.name}}</div>
              <div>{{itemData.user.login}}</div>
              <div>{{LANGDATA.TEXT.SELECTED_ROLES}}: {{countSelectedApplication}}</div>
            </div>
            <div class="itemApplication__content">
              <div>{{itemData.description}}</div>
              <template v-for="itemApplication in itemData.list">
                <div>
                  <input type="checkbox" :checked="itemApplication.selected" @click="itemApplicationChecked(itemApplication.id)"> {{itemApplication.name}}</div>
              </template>
            </div>
            <div class="itemApplication__bottom">
              <button @click="toggleViewType()">{{LANGDATA.TEXT.CANCEL}}</button>
              <button >{{LANGDATA.TEXT.REQUEST_ACCESS}}</button>
            </div>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ListApplication',
  props: {
    type: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {
      items: [], // список приложений

      applicationId: '',
      isLoadingItem: false,

      itemData: {},

      showEditType:false,


      // edit type view
        //
        //countApplication: 0
    }
  },
  components: {
    itemListApplication: () => import('@/components/02_molecule/itemListApplication')
  },
  mounted: function () {

    this.$store.dispatch('getData', {type: this.type})
      .then(response => {
        this.items = response
        this.$emit('list-loading-success', this.items.length)
      })
      .catch(error => {
        this.$emit('list-loading-error', error)
      })
  },
  methods: {

    itemApplicationChecked: function(id){
      //this.countApplication = this.showEditType
//      console.log(id);
    },

    toggleViewType: function(){
      this.showEditType = !this.showEditType;
    },
    itemClick: function (obj) {
      this.applicationId = obj.id
      this.isLoadingItem = true
      this.showEditType = false

      this.$store.dispatch('getData', {type: 'APPLICATION_BY_ID', id: obj.id})
       .then(response => {
         this.itemData = response
         this.isLoadingItem = false
       })
    }
  },
  computed: {
    ...mapGetters([
      'LANGDATA'
    ]),
    countApplication: function(){
      return this.itemData.list.length;
    },
    countSelectedApplication: function(){
      return this.itemData.list.filter(el=>{return el.selected}).length
    }
  }

}
</script>

<style></style>



