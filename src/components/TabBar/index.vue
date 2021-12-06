<template>
  <footer id="footer">
    <ul>
      <router-link tag="li" to="/movie">
        <i class="iconfont icon-dianying"></i>
        <p>首页</p>
      </router-link>
      <router-link tag="li" to="/cinema">
        <i class="iconfont icon-huabankaobei"></i>
        <p>资讯</p>
      </router-link>
      <router-link tag="li" to="/mine">
        <i class="iconfont icon-shouye"></i>
        <p>我的</p>
      </router-link>
    </ul>
  </footer>
</template>

<script lang="ts">
export default {
  name: "",
};
</script>


<style scoped>
#footer {
  width: 100%;
  height: 50px;
  background: white;
  border-top: 2px #ebe8e3 solid;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: black;
  border-radius: 5px;
}
#footer ul {
  display: flex;
  text-align: center;
  height: 50px;
  align-items: center;
}
#footer ul li {
  flex: 1;
  height: 40px;
  list-style: none;
}
#footer ul li.active {
  color: #f03d37;
}
#footer ul li.router-link-active {
  color: #fbff25;
}
#footer ul i {
  font-size: 20px;
  background-color: rgb(197, 163, 253);
  border-radius: 5px;
}
#footer ul p {
  font-size: 12px;
  line-height: 18px;
  color: white;
}
</style>