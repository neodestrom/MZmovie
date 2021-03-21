<template>
  <div>
    <ul>
      <router-link tag="li"
                   active-class="active"
                   to="/films/nowPlaying">
        <span>正在热映</span>
        <div class="tab-ink-bar-wrapper">
          <span class="tab_ink_bar"></span>
        </div>
      </router-link>
      <router-link tag="li"
                   active-class="active"
                   to="/films/comingSoon">
        <span>即将上映</span>
      </router-link>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
ul {
  line-height: 3rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  border-bottom: 1px solid #666663;
  li {
    flex: 2;
    width: 80%;
    text-align: center;
    // :nth-child(1) {
    //   display: block;
    //   font-size: 0.7rem;
    // }
  }
}
.active {
  color: #ff5f16;
}
.tab-ink-bar-wrapper {
  position: relative;

  .tab-ink-bar {
    position: absolute;
    top: 0.3rem;
    left: 6rem;
    transition: left;
    width: 56px;
    border-bottom: 2px solid #ff5f16;
    border-radius: 20px;
    display: block;
    margin: auto;
  }
}
</style>
<script>
export default {
}
</script>
