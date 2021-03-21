import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    comingSoonList: [],
    nowPlayingList: [],
    detailState: '',
    detailList: []
  },
  mutations: {
    nowPlayingListMutation (state, data) {
      state.nowPlayingList = data
    },
    comingSoonListMutation (state, data) {
      state.comingSoonList = data
    },
    setDetailStateMutation (state, data) {
      state.detailState = data
    },
    detailListMutaion (state, data) {
      state.detailList = data
    }
  },
  actions: {
    // 这里专门用来进行异步处理
    getNowPlayingListAction (store) {
      axios({
        method: 'get',
        url: 'http://192.168.43.254:8080/ajax/gateway?cityId=511100&pageNum=1&pageSize=10&type=1&k=7382179',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1614483444550778016104449"}',
          'X-Host': 'mall.film-ticket.film.list',
          'X-Custom-Header': 'foobar'
        }
      }).then((res) => {
        store.commit('nowPlayingListMutation', res.data.data.films)
      })
    },
    getComingSoonListAction (store) {
      axios({
        method: 'get',
        url: 'http://192.168.43.254:8080/ajax/gateway?cityId=511100&pageNum=1&pageSize=10&type=2&k=6460969',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1614483444550778016104449"}',
          'X-Host': 'mall.film-ticket.film.list',
          'X-Custom-Header': 'foobar'
        }
      }).then((res) => {
        store.commit('comingSoonListMutation', res.data.data.films)
      })
    },
    getDetailListAction (store) {
      axios({
        method: 'get',
        url: `http://192.168.43.254:8080/ajax/gateway?filmId=${store.state.detailState}&k=3915556`,
        headers: {
          'X-Host': 'mall.film-ticket.film.info',
          'X-Requested-With': 'XMLHttpRequest',
          'X-Token': ' undefined'
        }
      }).then((res) => {
        console.log(res)
        store.commit('detailListMutaion', res.data.data.film)
      })
    }
  },
  modules: {
  }
})
