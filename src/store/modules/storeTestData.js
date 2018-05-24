import axios from 'axios'

const state = {
  tableData: {
    columns: [],
    rows: []
  }
}

const getters = {
  tableData: state => state.tableData
}

const actions = {
  actionA ({ dispatch, commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get('https://jsonplaceholder.typicode.com/posts/1')

        .then(function (response) {
          resolve(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    })
  }
}

const mutations = {
  someMutation (state, message) {
    state.tableData.columns.push({ id: 'date', label: 'date' })
    state.tableData.columns.push({ id: 'name', label: 'name' })
    state.tableData.rows.push({ date: 'a1', name: 'b1' })
    state.tableData.rows.push({ date: 'a1', name: 'b1' })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
