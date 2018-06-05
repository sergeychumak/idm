import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const store = new Vuex.Store({

  modules: {
    // config: storeConfig,
    // testData: storeTestData
  },

  state: {
    used_api_url: 'v1', // Используемый API URL
    config: {
      activeLanguage: 'ru',
      language: {
        ru: {
          CREATE_QUERY: 'Запросить доступ',
          CREATE_QUERY_TITLE: 'Новый запрос доступа',
          ACCESS_CONTROL: 'Управление доступом',
          REQUESTS_FOR_ACCESS: 'Заявки на доступ',
          REQUESTS_FOR_APPROVAL: 'Заявки на соглосование',
          TEXT: {
            APPLICATIONS_CONSISTENTLY: 'Приложений согласованно',
            PENDING_ACCESS_REQUESTS: 'Запросы доступа на рассмотрении',
            SELECTED_APPLICATIONS_AND_ROLES: 'Выбранные приложения и роли',
            ROLES: 'Ролей',
            SELECTED_ROLES: 'Выбрано ролей',
            EDIT: 'Изменить',
            CANCEL: 'Отмена',
            REQUEST_ACCESS: 'Запросить доступ'
          }
        }
      },
      apiurl_v1: {
        // Список приложений
        'LIST_APPLICATION': 'static/LIST_APPLICATION.json',
        // список ролей пользователя для приложения
        'A': 'static/A.json',
        'USER_INFO': 'static/USER_INFO.json',
        'USER_APPLICATION': 'static/USER_APPLICATION.json',
        'APPLICATION_BY_ID': 'static/APPLICATION_BY_ID.json'
      }
    }
  },
  actions: {
    /** GLOBAL METHODS
        Получение данных с сервера
    */
    getData ({ dispatch, commit }, data) {

      return sleep(2000).then(() => {
        switch (data.type) {
          default:
            return axios
              .get(this.state.config['apiurl_' + this.state.used_api_url][data.type])
              .then(response => {return response.data})
        }
      })
    }
  },
  mutations: {
    // INCREMENT_COUNTER: (state, data) => {
    //   state.counter += data.number ;
    // }
  },

  getters: {
    LANGDATA: state => {
      return state.config.language[state.config.activeLanguage]
    },
    MENUDATA: state => {
      return [
        {id: 'item1', label: state.config.language[state.config.activeLanguage].ACCESS_CONTROL, url: 'access_control'},
        {id: 'item2', label: state.config.language[state.config.activeLanguage].REQUESTS_FOR_ACCESS, url: 'requests_for_access'},
        {id: 'item3', label: state.config.language[state.config.activeLanguage].REQUESTS_FOR_APPROVAL, url: 'requests_for_approval'}
      ]
    }
  }

})

export default store
