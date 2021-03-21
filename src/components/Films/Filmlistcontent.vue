<template>
  <div class="list_content">
    <template v-if="IsNowplaying">
      <div class="list_item"
           v-for="(item,index) in films_data"
           :key="item.filmId"
           @click="accessFilmID(item)">
        <div class="pic">
          <img :src="films_data[index].poster"
               style="width=50px">
        </div>
        <div class="content">
          <div class="nowPlayingFilm_name">
            <span class="name">{{films_data[index].name}}</span>
            <span class="item">{{films_data[index].filmType.name}}</span>
          </div>
          <div class="nowPlayingFilm_grade">
            <span class="lable">观众评分</span>
            <span class="grade">{{films_data[index].grade}}</span>
          </div>
          <div class="nowPlayingFilm_actors">
            <span class="lable">主演: {{films_data[index].actors | actorFilter}}</span>
          </div>
          <div class="nowPlayingFilm_detail">
            <span class="lable">{{films_data[index].nation}} | {{films_data[index].runtime}}</span>
          </div>
        </div>
        <div class="buy_wrap">
          <div class="buy">购票</div>
        </div>

        <div class="line"></div>
      </div>
    </template>
    <template v-else>
      <template v-if="coming_soon_films_data.length">
        <div class="list_item"
             v-for="item in coming_soon_films_data"
             :key="item.filmId"
             @click="accessFilmID(item)">
          <div class="pic">
            <img :src="item.poster">
          </div>
          <div class="content">
            <div class="nowPlayingFilm_name">
              <span class="name">{{item.name}}</span>
              <span class="item">{{item.filmType.name}}</span>
            </div>
            <div>
              <span class="lable">主演: {{item.actors | actorFilter}}</span>
            </div>
            <div>
              <span class="lable">上映日期：3 月 12 日</span>
            </div>
          </div>

          <div class="buy_wrap">
            <div class="buy">购票</div>
          </div>

          <div class="line"></div>
        </div>
      </template>
    </template>
  </div>
</template>
<script>
import Vue from 'vue'
Vue.filter('actorFilter', (data) => {
  const arr = []
  for (const item in data) {
    arr.push(data[item].name)
  }

  const str = arr.join(' , ')
  return str
})
export default {
  data () {
    return {
      films_data: [],
      coming_soon_films_data: []
    }
  },
  methods: {
    accessFilmID (item) {
      if (this.$store.state.detailState !== item.filmId) {
        this.$store.commit('setDetailStateMutation', item.filmId)
        this.$store.dispatch('getDetailListAction')
      }

      this.$router.push(`/details/${item.filmId}`)
    }
  },
  computed: {
    IsNowplaying () {
      console.log(this.$route.path, this.$route.path === '/films/nowPlaying')
      return this.$route.path === '/films/nowPlaying'
    }
  },
  created () {
    if (this.$store.state.nowPlayingList) {
      console.log('store 有值')
      this.films_data = this.$store.state.nowPlayingList
    }
    if (this.coming_soon_films_data.length === 0) {
      this.coming_soon_films_data = this.$store.state.comingSoonList
      console.log(this.coming_soon_films_data)
    }
  },
  updated () {
    if (this.films_data.length === 0) {
      this.films_data = this.$store.state.nowPlayingList
    }
    if (this.coming_soon_films_data.length === 0) {
      this.coming_soon_films_data = this.$store.state.comingSoonList
    }
  }

}
</script>
<style lang="scss">
.list_content {
  position: relative;
  background: white;
  padding: 0 2rem;
  overflow: hidden;
}
.list_item {
  position: relative;
  height: 8rem;
  .pic {
    position: absolute;
    top: 13px;
    left: 0px;
    img {
      max-width: 66px;
    }
  }
  .content {
    position: absolute;
    width: 250px;
    top: 15px;
    left: 70px;
    text-overflow: ellipsis;

    .grade {
      color: #ffb232;
      font-size: 14px;
      margin-left: 2px;
    }
    .nowPlayingFilm_name {
      .name {
        font-size: 16px;
      }
      .item {
        color: #fff;
        background-color: #d2d6dc;
        height: 14px;
        line-height: 14px;
        padding: 0 2px;
        border-radius: 2px;
        margin-left: 2px;
      }
    }
  }
  .buy_wrap {
    position: absolute;
    height: 100%;
    width: 5rem;
    background: white;
    z-index: 5;
    right: 20px;
    .buy {
      position: absolute;
      color: #ff5f16;
      font-size: 13px;
      top: 52px;
      border: 1px solid #ff5f16;
      border-radius: 4px;
      padding: 2px 11px;
    }
  }
}
.lable {
  font-size: 13px;
  margin-top: 4px;
  color: #797d82;
}
.line {
  position: absolute;
  width: 100%;
  background: #f2f2f2;
  height: 1px;
  bottom: 0px;
}
.comingSoonFilm_name {
  .name {
    font-size: 16px;
  }
  .item {
    color: #fff;
    background-color: #d2d6dc;
    height: 14px;
    line-height: 14px;
    padding: 0 2px;
    border-radius: 2px;
    margin-left: 2px;
  }
}
</style>
