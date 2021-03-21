<template>
  <div class="center-view">
    <div class="avatar">
      <div class="avator-icon">&#xe618;</div>
      <div class="nick-name">立即登录</div>
    </div>
    <ul class="my-order-tab">
      <li>
        <div>&#xe616;</div>
        <span>电影订单</span>
      </li>
      <li>
        <div>&#xe6a3;</div>
        <span>商品订单</span>
      </li>
    </ul>
    <div class="divide"></div>

    <div class="other">
      <div class="my-card">
        <span>&#xe71d;</span><span>券</span>
      </div>
      <div class="my-card1">
        <span>&#xe600;</span><span>组合红包</span>
      </div>
      <div class="my-balance">
        <span>&#xe608;</span><span>余额</span>
      </div>
      <div class="system-set">
        <span>&#xe60b;</span><span>设置</span>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.center-view {
  font-family: "iconfont";
  font-size: 1rem;
  color: black;
  .divide {
    width: 100%;
    height: 1rem;
    background: #f4f4f4;
  }
  .avatar {
    position: relative;
    width: 100%;
    height: 8rem;
    background: orange;
    .avator-icon {
      position: absolute;
      font-size: 4rem;
      color: #9abfe2;
      left: 1.3rem;
      top: 1.6rem;
    }
    .nick-name {
      position: absolute;
      color: white;
      left: 6rem;
      top: 4rem;
    }
  }
  .my-order-tab {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: white;
    :nth-child(1) {
      :nth-child(1) {
        font-size: 2rem;
        color: #ffc82f;
        text-align: center;
        transform: translateY(0.7rem);
      }
      :nth-child(2) {
        font-size: 0.6rem;
        color: #797d82;
        text-align: center;
      }
    }
    :nth-child(2) {
      :nth-child(1) {
        font-size: 2rem;
        color: #ffc82f;
        text-align: center;
        transform: translateY(0.7rem);
      }
      :nth-child(2) {
        font-size: 0.6rem;
        color: #797d82;
        text-align: center;
      }
    }
  }
  .other {
    padding: 1rem;
    background: white;
    .my-card {
      border-bottom: 1px solid gray;
      :nth-child(1) {
        font-size: 1.8rem;
        color: #ff8462;
      }
      :nth-child(2) {
        display: inline-block;
        margin-left: 1rem;
        transform: translateY(-0.3rem);
      }
    }
    .my-card1 {
      border-bottom: 1px solid gray;
      :nth-child(1) {
        color: #baa27a;
        font-size: 1.8rem;
      }
      :nth-child(2) {
        display: inline-block;
        margin-left: 1rem;
        transform: translateY(-0.3rem);
      }
    }
    .my-balance {
      border-bottom: 1px solid gray;
      :nth-child(1) {
        color: #ffb232;
        font-size: 1.8rem;
      }
      :nth-child(2) {
        display: inline-block;
        margin-left: 1rem;
        transform: translateY(-0.3rem);
      }
    }
    .system-set {
      border-bottom: 1px solid gray;
      :nth-child(1) {
        color: #cbd97d;
        font-size: 1.8rem;
      }
      :nth-child(2) {
        display: inline-block;
        margin-left: 1rem;
        transform: translateY(-0.3rem);
      }
    }
  }
}
</style>
