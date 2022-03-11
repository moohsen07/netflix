import Vuex from 'vuex'
import Banners from './Banners'
import Media from './Media'
import SingleMedia from './SingleMedia'

const createStore = () => {
  return new Vuex.Store({
    state: {
      baseImgUrl: 'https://image.tmdb.org/t/p/original/',
      trending: []

    },
    mutations: {
      SET_TRENDING(state, data) {
        state.trending = data
      }
    },
    actions: {
      async getTrending({
        commit
      }) {
        const res = await this.$api.$get('trending/all/day')
        const data = await res.results
        commit('SET_TRENDING', data)
      }
    },
    getters: {
      getTrending(state) {
        return state.trending
      }
    },
    modules: {
      Banners,
      Media,
      SingleMedia

    }
  })
}
export default createStore
