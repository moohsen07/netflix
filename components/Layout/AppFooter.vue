<template>
  <div class="footer-dark bg-black text-muted py-8 mt-5 lg:mt-16">
    <footer>
      <div class="container">
        <div
          class="
            grid grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-4
          "
        >
          <div class="item">
            <app-logo></app-logo>
            <ul class="mt-2">
              <li><a href="#">Audio and Subtitles</a></li>
              <li><a href="#">Media Center</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div class="item">
            <span class="text-primary">Movies</span>
            <ul class="mt-2">
              <li><a href="#">Popular Movies</a></li>
              <li><a href="#">Now Playing Movies</a></li>
              <li><a href="#">Top Rated Movies</a></li>
              <li><a href="#">Upcoming Movies</a></li>
            </ul>
          </div>
          <div class="item">
            <span class="text-primary">Series</span>
            <ul class="mt-2">
              <li><a href="#">Popular Series</a></li>
              <li><a href="#">Airing Today Series</a></li>
              <li><a href="#">Top Rated Series</a></li>
              <li><a href="#">On Tv Series</a></li>
            </ul>
          </div>
          <div class="item">
            <div class="social-block flex gap-2 my-4">
              <i class="lab la-facebook-f"></i>
              <i class="lab la-instagram"></i>
              <i class="lab la-twitter"></i>
              <i class="lab la-github"></i>
            </div>
            <div class="rights">
              <h6>
                All rights reserved by
                <span class="text-primary">Ahmed</span> &copy; 2022
              </h6>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import appLogo from '@/components/UI/AppLogo.vue'

export default {
  components: { appLogo },
}
</script>

<style>
.social-block {
  font-size: 28px;
  opacity: 0.6;
}
.footer-dark ul {
  padding: 0;
  list-style: none;
  line-height: 1.6;
  font-size: 13px;
  margin-bottom: 0;
}

.footer-dark ul a {
  color: inherit;
  text-decoration: none;
  display: block;
  padding: 5px 0;
}

.footer-dark ul a:hover {
  opacity: 0.8;
}
</style>
