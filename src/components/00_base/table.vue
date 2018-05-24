<template>
  <div>
    <hr>
    <table>
      <thead>
        <tr>
          <td v-for='column in columns' :key="column.id">{{column.label}}</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(row,index) in rows' :key="index">
          <td v-for='column in columns' :key="column.id">{{row[column.id]}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  data: function () {
    return {
      test: '',
      columns: [],
      rows: []
    }
  },
  mounted: function () {
    this.$store.dispatch('actionA').then((response) => {
      let columns = []
      let rows = []
      let row = {}
      Object.keys(response.data).forEach((el) => {
        columns.push({ id: el, label: el })
        row[el] = response.data[el]
      })
      this.columns = columns
      rows.push(row)
      rows.push(row)
      rows.push(row)
      rows.push(row)
      rows.push(row)

      this.rows = rows
    })
  }
}
</script>

<style></style>
