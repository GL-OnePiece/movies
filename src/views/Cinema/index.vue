<template>
  <div id="main">
    <Header title="海贼王影院" />
    <div id="content">
      <!-- <div class="cinema_menu">
        <div class="city_switch">
          全城<i class="iconfont icon-xialajiantou"></i>
        </div>
        <div class="brand_switch">
          品牌<i class="iconfont icon-xialajiantou"></i>
        </div>
        <div class="feature_switch">
          特色<i class="iconfont icon-xialajiantou"></i>
        </div>
      </div> -->
    </div>
    <CiList />
    <TabBar />
  </div>
</template>


<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import CiList from "@/components/CiList";

export default {
  name: "Cinema",
  components: {
    Header,
    TabBar,
    CiList,
  },
};
</script>

<style scoped>
#content {
  margin-bottom: 0;
}
#content .cinema_menu {
  width: 100%;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgb(22, 17, 17);
  padding: 10px 0;
}
.cinema_menu div {
  color: white;
}
</style>