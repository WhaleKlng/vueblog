<template>
  <div id="nav-tab">

    <div class="nav-tab-item active">
      <i class="nav-tab-item_icon iconfont icon-shouye"></i>
      <p class="nav-tab-item_label">首页</p>
    </div>

    <div class="nav-tab-item">
      <i class="nav-tab-item_icon iconfont icon-guanzhu"></i>
      <p class="nav-tab-item_label">关注</p>
    </div>

    <div class="nav-tab-item">
      <i class="nav-tab-item_icon iconfont icon-faxian"></i>
      <p class="nav-tab-item_label">发现</p>
    </div>

    <div class="nav-tab-item">
      <i class="nav-tab-item_icon iconfont icon-xiaoxizhongxin"></i>
      <p class="nav-tab-item_label">消息中心</p>
    </div>

    <div class="nav-tab-overlay">
    </div>

  </div>
</template>

<script>
import {onMounted} from 'vue'

export default {
  name: "SlidNav",
  setup() {
    onMounted(() => {
      let activeIndex = 0;
      let items = document.getElementsByClassName("nav-tab-item");

      for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function () {
          this.classList.add("active");
          items[activeIndex].classList.remove("active");
          activeIndex = i;
          document.querySelector(".nav-tab-overlay").style.left = `${activeIndex * 130}px`
        })
      }
    })

  }
}
</script>

<style scoped>
@import "https://at.alicdn.com/t/font_1471409_g6hvg6yqo15.css";
#nav-tab {
  position: relative;
  width: 600px;
  height: 150px;
  background-color: #fff;
  display: flex;
  border-radius: 20px 20px 90px 90px;
  overflow: hidden;
  border: 20px solid white;
}

.nav-tab-item {
  width: 130px;
  height: 100%;
  z-index: 2;
  transition: .3s;
  cursor: pointer;
  /* 居中 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.nav-tab-item.active {
  width: 210px;
}

.nav-tab-item_icon {
  font-size: 32px;
  color: #4298e7;
  transition: .3s;
  transform: translate(0, 0px);
}

.active .nav-tab-item_icon {
  transform: translate(0, -10px);
}

.nav-tab-item_label {
  font-size: 20px;
  color: #4298e7;
  opacity: 0;
  transition: .3s;
  user-select: none;
}

.active .nav-tab-item_label {
  opacity: 1;
}

.nav-tab-overlay {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 210px;
  background-color: #e4f2ff;
  border-radius: 20px;
  transition: .3s;
}
</style>