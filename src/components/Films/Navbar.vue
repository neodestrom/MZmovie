<template>
  <ul>
    <router-link tag="li"
                 to="/films"
                 active-class="active">
      <span>&#xe6ee;</span>
      <span>电影</span>
    </router-link>
    <router-link tag="li"
                 to="/cinemas"
                 active-class="active">
      <span>&#xe625;</span>
      <span>影院</span>
    </router-link>
    <router-link tag="li"
                 to="/center"
                 active-class="active">
      <span>&#xe605;</span>
      <span>我的</span>
    </router-link>
  </ul>
</template>
<style lang="scss" scoped>
ul {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  li {
    font-family: "iconfont";
    list-style: none;
    text-align: center;
    :nth-child(1) {
      display: block;
      font-size: 1.5em;
    }
  }
}
.active {
  color: #ff5f16;
}
</style>
