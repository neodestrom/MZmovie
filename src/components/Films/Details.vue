<template>
  <div class="film"
       v-if="filmIdDataList">
    <div class="film-header">
      <div class="goBack"
           @click="goBack">
        &#xe60c;
      </div>
    </div>
    <div class="film-poster">
      <img :src="filmIdDataList.poster">
    </div>
    <div class="film-detail">
      <div class="col">
        <div class="flim_name">
          <div class="name">{{filmIdDataList.name}}</div>
          <div class="item">{{filmIdDataList.filmType.name}}</div>
        </div>
        <div class="film-grade">{{filmIdDataList.grade}}分</div>
      </div>
      <div class="film-category">{{filmIdDataList.category}}</div>
      <div class="film-premiere-time"> 2021-02-12上映 </div>
      <div class="film-nation-runtime"> {{filmIdDataList.nation}} | {{filmIdDataList.runtime}} </div>
      <div class="film-synopsis"
           :style="synopsisHeight">{{filmIdDataList.synopsis}}</div>
      <div class="toggle"
           @click="changeSynopsis"
           :style="toggleDirection"><span>
          &#xe60c;
        </span></div>
    </div>

    <div class="divide"></div>

    <div class="actors">
      <div class="actors-title-bar">
        <div class="actors-title-text">演职人员</div>
      </div>
      <div class="actors-list">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"
                 v-for="item in filmIdDataList.actors"
                 :key="item.name">
              <div class="actors-img">
                <img :src="item.avatarAddress">
              </div>
              <div class="actors-name">{{item.name}}</div>
              <div class="actors-role">{{item.role}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="divide"></div>
    <div class="photos">
      <div class="photos-title-bar">
        <div class="photos-title-text">剧照</div>
        <div class="photos-to-all">全部(5)></div>
      </div>
      <div class="swiper-container1">
        <ul class="swiper-wrapper">
          <li class="swiper-slide photos-list"
              v-for="item in filmIdDataList.photos"
              :key="item.name">
            <img :src="item">
          </li>
        </ul>
      </div>
    </div>
    <a href="#">
      <div class="goSchedule">选座购票</div>
    </a>
  </div>
</template>
<script>
import Swiper from 'swiper/swiper-bundle.min.js'
import 'swiper/swiper-bundle.min.css'
export default {
  data () {
    return {
      filmIdDataList: null,
      currentId: '',
      synopsisHeight: '',
      toggleDirection: ''
    }
  },
  computed: {
    setFilmId () {
      return this.$store.state.detailList
    }
  },
  created () {
    console.log('创建方法执行了')
    this.currentId = this.$route.path.split('/')[this.$route.path.split('/').length - 1]
    if (this.currentId !== this.$store.state.detailState) {
      this.$store.commit('setDetailStateMutation', this.currentId)
      this.$store.dispatch('getDetailListAction')
    }
  },
  updated () {
    console.log('更新方法执行了')
  },
  watch: {
    setFilmId (newVal, oldVal) {
      this.filmIdDataList = newVal
      console.log(this.filmIdDataList, '此处是watch改变的值')
      this.$nextTick(function () {
        /* eslint-disable no-new */
        new Swiper('.swiper-container', {
          slidesPerView: 4,
          spaceBetween: 6,
          freeMode: true
        })
        new Swiper('.swiper-container1', {
          slidesPerView: 3,
          spaceBetween: 6,
          freeMode: true
        })
      })
    }
  },
  mounted () {

  },

  methods: {
    changeSynopsis () {
      if (this.synopsisHeight === '' && this.toggleDirection === '') {
        this.synopsisHeight = 'height:9.1rem;'
        this.toggleDirection = 'transform: rotate(180deg);'
      } else {
        this.synopsisHeight = ''
        this.toggleDirection = ''
      }
    },
    goBack () {
      window.history.go(-1)
    }
  }
}
// https://m.maizuo.com/gateway?filmId=5337&k=8989582
// https://m.maizuo.com/gateway?filmId=4835
</script>
<style lang="scss">
.film {
  width: 100%;
  background: white;
  .divide {
    background: #f2f2f2;
    width: 100%;
    height: 1rem;
  }
  .divide1 {
    background: #f2f2f2;
    width: 100%;
    height: 3rem;
  }
  .film-header {
    position: absolute;
    width: 100%;
    height: 44px;
    z-index: 2;
    .goBack {
      font-family: "iconfont";
      position: absolute;
      font-size: 1.2rem;
      transform: rotate(90deg);
      text-align: center;
      line-height: 30px;
      font-weight: bold;
      top: 6px;
      left: 9px;
      width: 30px;
      height: 30px;
      background: hsla(0, 0, 100%, 0.5);
      border-radius: 15px;
    }
  }
  .film-poster {
    width: 100%;
    height: 15rem;
    overflow: hidden;
    img {
      width: inherit;
      text-align: center;
      transform: translateY(-30%);
    }
  }
  .film-detail {
    padding: 0 1rem;
    color: #797d82;
    .col {
      margin-top: 1rem;
      overflow: hidden;
      .flim_name {
        float: left;
        .name {
          float: left;
          color: #191a1b;
          font-size: 18px;
          height: 24px;
          line-height: 24px;
          margin-right: 7px;
        }
        .item {
          float: left;
          font-size: 9px;
          color: #fff;
          margin-top: 0.3rem;
          background-color: #d2d6dc;
          height: 14px;
          line-height: 14px;
          padding: 0 2px;
          border-radius: 2px;
        }
      }
      .film-grade {
        float: right;
        margin-right: 0.5rem;
        width: calc(100% - 250px);
        text-align: right;
        color: #ffb232;
        font-size: 18px;
        font-style: italic;
      }
    }
    .toggle {
      width: 100%;
      height: 2rem;
      text-align: center;
      transition: all, 1s;
      span {
        font-family: "iconfont";
      }
    }
    .film-category,
    .film-premiere-time,
    .film-nation-runtime {
      margin-top: 4px;
    }
    .film-synopsis {
      margin-top: 1.5rem;
      overflow: hidden;
      height: 2.1rem;
      transition: all, 1s;
    }
  }
  .actors {
    padding: 0 1rem;
    height: 11rem;
    .actors-title-bar {
      .actors-title-text {
        font-size: 1.2rem;
        color: black;
      }
    }
    .actors-list {
      .actors-img {
        overflow: hidden;
        height: 6rem;
        img {
          max-width: 5rem;
          transform: translateY(-1rem);
        }
        .actors-name {
          text-align: center;
        }
        .actors-role {
          text-align: center;
          color: #797d82;
        }
      }
    }
  }
  .photos {
    height: 11rem;
    width: 100%;
    .swiper-container1 {
      width: 100%;
      overflow: hidden;
    }
    .photos-title-bar {
      margin-top: 1rem;

      padding: 0 2rem;
      overflow: hidden;
      .photos-title-text {
        float: left;
        font-size: 1.2rem;
      }
      .photos-to-all {
        float: right;
        color: #797d82;
        line-height: 2rem;
      }
    }
    .photos-list {
      margin-top: 1.5rem;
      width: 10rem;
      img {
        width: 100%;
      }
    }
  }
  .goSchedule {
    position: sticky;
    bottom: 0px;
    text-align: center;
    font-size: 1rem;
    color: blanchedalmond;
    font-style: bold;
    line-height: 4rem;
    width: 100%;
    height: 4rem;
    background: #ff5f16;
    z-index: 99;
  }
}
</style>
