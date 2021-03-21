<template>
  <div id="app">
    <router-view></router-view>

    <div class="footer">
      <navbar v-if="isShowNav"></navbar>
    </div>
  </div>
</template>
<script>
import navbar from './components/Films/Navbar.vue'
export default {
  created () {
    if (this.$store.state.nowPlayingList.length === 0) {
      this.$store.dispatch('getNowPlayingListAction')
    }
    if (this.$store.state.comingSoonList.length === 0) {
      this.$store.dispatch('getComingSoonListAction')
    }

    // axios.get('api/gateway?cityId=511300&pageNum=1&pageSize=10&type=1&k=7382179', {
    //   headers: { 'If-None-Match': 'W/"13ed-0bTZaRf6SO9az4Q2FYfaDA', 'Access-Control-Allow-Headers ': 'X-Host ', 'X-Host ': 'mall.film-ticket.film.list', 'X-Custom-Header': 'foobar' }

    // })
    //   .then(res => {
    //     console.log(res)
    //   })
    //   .catch(err => {
    //     console.error(err)
    //   })
  },
  computed: {
    isShowNav () {
      if (this.$route.path.split('/')[this.$route.path.split('/').length - 1] === this.$store.state.detailState) { return false } else {
        return true
      }
    }
  },
  components: {
    navbar
  }
}
</script>
<style lang="scss">
.footer {
  position: fixed;
  width: 100%;
  bottom: 0px;
  background: white;
  z-index: 99;
}
</style>
