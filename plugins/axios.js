export default function ({
  $axios
}, inject) {
  const api = $axios.create({
    params: {
      api_key: process.env.api_key,
      page: 1,
    }
  })

  api.setBaseURL("https://api.themoviedb.org/3")

  inject('api', api)


}
