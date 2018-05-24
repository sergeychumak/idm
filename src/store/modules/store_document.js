const state = {
  lists : []
}

const getters = {
  LIST_DOCUMENTS_COUNT: state => state.lists.length,
  LIST_DOCUMENTS: state => state.lists
}

const actions = {
  ADD_NEW_DOCUMENT ({ commit, state }, obj) {
    if (obj.message === "" )
      obj.message = "no name";
    commit('_ADD_NEW_DOCUMENT', obj.message)
  },
  DELETE_DOCUMENT  ({ commit, state }, obj) {
    let res = [];
    state.lists.forEach((el,i)=>{
      if (i !== obj.index ){
        res.push(el);
      }
    } )
    commit('_NEW_DOCUMENT_LIST', res)
  }
}

const mutations = {
  _ADD_NEW_DOCUMENT (state, message) {
    state.lists.push(message);
  },
  _NEW_DOCUMENT_LIST (state, lists) {
    state.lists = lists;
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
