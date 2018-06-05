<template>
  <div>
    <h1>{{this.LANGDATA.CREATE_QUERY_TITLE}}</h1>
    <h3>предоставить доступ <a href="">мне (Чумак Сергей)</a></h3>
    <h4>нет приложений для запроса доступа</h4>
    <h4>Выбранные приложения и роли</h4>

    <listApplication />

    <a href="">Отмена</a>
    <a href="">Добавить приложения</a>
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
    listApplication: () => import('@/components/04_template/listApplication')
  },
  mounted: function () {},
  computed: {
    ...mapGetters([
      'LANGDATA'
    ])
  }
}
</script>

<style></style>
