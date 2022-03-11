<template>
  <nav class="absolute w-full py-5">
    <div class="container">
      <div class="nav flex justify-between items-center">
        <div class="links hidden lg:block">
          <list-items />
        </div>
        <div class="app-logo">
          <nuxt-link to="/">
            <App-logo />
          </nuxt-link>
        </div>
        <div class="account flex gap-x-5 items-center">
          <i class="las la-search cursor-pointer"></i>
          <img src="~/assets/imgs/avatar.png" alt="" srcset="" />
          <i class="las la-sign-out-alt cursor-pointer"></i>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import AppLogo from '../UI/AppLogo.vue'
import listItems from './ListItems.vue'

export default {
  components: { AppLogo, listItems },
}
</script>

<style lang="scss">
nav {
  transition: 0.2s ease-in-out;
  z-index: 99999999;
  &.active-nav {
    position: fixed;
    background: #121212;
    box-shadow: 0px 2px 10px 0 #121212;
  }

  .app-logo {
    @media (min-width: 1280px) {
      transform: translateX(-100%);
    }
  }
  .account {
    i {
      font-size: 30px;
    }
  }
}
</style>
