<template>
  <nav id="nav">
    <ul>
      <li><a class="icon solid fa-home" href="index.html"><span>首页</span></a></li>
      <li>
        <a href="#" class="icon fa-chart-bar"><span>文章</span></a>
        <ul>
          <li><a href="#">Lorem ipsum dolor</a></li>
          <li><a href="#">Magna phasellus</a></li>
          <li><a href="#">Etiam dolore nisl</a></li>
          <li>
            <a href="#">Phasellus consequat</a>
            <ul>
              <li><a href="#">Magna phasellus</a></li>
              <li><a href="#">Etiam dolore nisl</a></li>
              <li><a href="#">Phasellus consequat</a></li>
            </ul>
          </li>
          <li><a href="#">Veroeros feugiat</a></li>
        </ul>
      </li>
      <li><a class="icon solid fa-cog" href="left-sidebar.html"><span>生活记录</span></a></li>
      <li><a class="icon solid fa-retweet" href="right-sidebar.html"><span>关于合作</span></a></li>
      <li><a class="icon solid fa-sitemap" href="no-sidebar.html"><span>我的开源</span></a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "CommonNav"
}
</script>

<style scoped>
</style>