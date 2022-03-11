const state = {
  media: {}
}

const mutations = {
  SET_SINGLE_MEDIA(state, data) {
    state.media = data
  }
}
const actions = {
  async getSingleMedia({
    commit
  }, {
    media_type,
    id
  }) {
    const res = await this.$api.$get(`${media_type}/${id}?append_to_response=credits`)
    commit('SET_SINGLE_MEDIA', res)
  }
}
const getters = {
  getSingleMovie(state) {
    const {
      backdrop_path,
      original_title,
      overview,
      genres,
      poster_path,
      production_companies,
      release_date,
      vote_average
    } = state.media
    return {
      backdrop_path,
      original_title,
      overview,
      genres,
      poster_path,
      production_companies,
      release_date,
      vote_average
    }

  },
  getSingleSeries(state) {
    const {
      backdrop_path,
      poster_path,
      first_air_date,
      genres,
      original_name,
      overview,
      production_companies,
      number_of_seasons,
      seasons,
      vote_average
    } = state.media
  },
  mediaActors(state) {
    const cast = state.media.credits.cast
    return cast.length > 6 ? cast.slice(0, 6) : cast
  },
  mediaDirectorsAndProd(state) {
    return state.media.credits.crew
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
