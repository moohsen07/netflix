const state = {
  popular: {},
  now_playing: {},
  top_rated: {}
}

const mutations = {
  SET_POPULAR(state, {
    data,
    media_type
  }) {
    state.popular[media_type] = data
  },
  SET_NOW_PLAYING(state, {
    data,
    media_type
  }) {
    state.now_playing[media_type] = data
  },
  SET_TOP_RATED(state, {
    data,
    media_type
  }) {
    state.top_rated[media_type] = data
  },
}

const actions = {
  async getPopular({
    commit
  }, {
    media_type,
    page = 1
  }) {
    const res = await this.$api.$get(`${media_type}/popular?page=${page}"`)
    const data = await res.results
    commit('SET_POPULAR', {
      data,
      media_type
    })
  },
  async getNowPlaying({
    commit
  }, {
    media_type,
    page = 1
  }) {
    const endPoint = media_type == 'movie' ? 'now_playing' : 'on_the_air'
    const res = await this.$api.$get(`${media_type}/${endPoint}?page=${page}`)
    const data = await res.results

    commit('SET_NOW_PLAYING', {
      data,
      media_type
    })
  },
  async getTopRated({
    commit
  }, {
    media_type,
    page = 1
  }) {
    const res = await this.$api.$get(`${media_type}/top_rated?page=${page}"`)
    const data = await res.results
    commit('SET_TOP_RATED', {
      data,
      media_type
    })
  },

}

const getters = {
  getPopularMovies(state) {
    return state.popular.movie || []
  },
  getPopularSeries(state) {
    return state.popular.tv || []
  },
  getNowPlayingMovies(state) {
    return state.now_playing.movie || []
  },
  getNowPlayingSeries(state) {
    return state.now_playing.tv || []
  },
  getTopRatedMovies(state) {
    return state.top_rated.movie || []
  },
  getTopRatedSeries(state) {
    return state.top_rated.tv || []
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
