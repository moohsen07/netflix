import SectionTitle from '../components/UI/SectionTitle.vue'
import SwiperControls from '../components/UI/SwiperControls.vue'
import TabPanels from '../components/UI/TabPanels.vue'
import MediaSlider from '../components/MediaComponents/MediaSlider.vue'

export default {
  components: {
    SectionTitle,
    SwiperControls,
    TabPanels,
    MediaSlider
  },
  data() {
    return {
      pannel: 'movies',
      data: {},
    }
  },
  methods: {
    setPannel(pannel) {
      this.pannel = pannel
    },
  },
  async fetch() {
    const payload = {
      media_type: 'movie',
      page: '1'
    }
    await this.$store.dispatch(`Media/${this.endPoint}`, payload)
    await this.$store.dispatch(`Media/${this.endPoint}`, {
      media_type: 'tv'
    })
    this.data = {
      movies: this.movies,
      series: this.series,
    }
  },
  // computed: {
  //   movies() {
  //     return this.$store.getters[`Media/${this.getters.movies}`]
  //   },
  //   series() {
  //     return this.$store.getters[`Media/${this.getters.series}`]
  //   },
  // },
}
