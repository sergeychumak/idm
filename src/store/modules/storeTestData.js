import axios from 'axios'

const state = {}

const getters = {}

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

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}
