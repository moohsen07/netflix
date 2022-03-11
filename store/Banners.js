import {
  Promise
} from "core-js";

const state = {
  banners: null,
  ids: ["62560", "60574", "66732"]
}

const mutations = {
  SET_SERIES(state, series) {
    state.banners = series
  }
}

const actions = {
  async getSeries({
    state,
    commit
  }) {
    const promices =
      state.ids.reduce((arr, id) => {
        arr.push(this.$api.$get(`tv/${id}`))
        return arr
      }, [])
    return Promise.all(promices).then(res => {
      commit('SET_SERIES', res)
    })
  }
}

const getters = {
  getBanners(state) {
    return state.banners
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
