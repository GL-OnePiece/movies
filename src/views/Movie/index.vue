<template>
  <div id="main">
    <!-- <Header title="电影" /> -->
    <div id="content">
      <div class="movie_menu">
        <router-link tag="div" to="/movie/home" class="city_name">
          <span class="span">动漫</span>
          <!-- <i class="iconfont icon-xialajiantou"></i> -->
        </router-link>
        <div class="hot_swtich">
          <router-link tag="div" to="/movie/nowPlaying" class="hot_item"
            >豆瓣高分</router-link
          >
        </div>
        <div class="hot_swtich">
          <router-link tag="div" to="/movie/comingSoon" class="hot_item"
            >风景</router-link
          >
        </div>
        <router-link tag="div" to="/movie/search" class="search_entry">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </div>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
    <TabBar />
  </div>
</template>


<script>
// import Header from "@/components/Header";
import TabBar from "@/components/TabBar";

export default {
  name: "Movie",
  components: {
    // Header,
    TabBar,
  },
};
</script>

<style scoped>
#content .movie_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-arounrouter-link;
  position: fixed;
  background: rgba(19, 13, 13, 0.8);
  /* background: #16161a; */
}
.span {
  margin-right: 20px;
}
/* router-link {
  color: rgb(255, 254, 254);
} */
.movie_menu .city_name {
  margin-left: 20px;
  color: white;
  height: 100%;
  line-height: 45px;
}
.movie_menu .city_name.active {
  color: white;
  border-bottom: 2px #0ef1c0 solid;
}
.movie_menu .city_name.router-link-active {
  color: rgb(12, 161, 154);
  border-bottom: 2px #19e9f8 solid;
}
.movie_menu .hot_swtich {
  display: flex;
  height: 100%;
  line-height: 45px;
  margin: 0;
}
.movie_menu .hot_item {
  font-size: 15px;
  color: white;
  width: 80px;
  text-align: center;
  margin: 0 12px;
  font-weight: 700;
}
.movie_menu .hot_item.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .hot_item.router-link-active {
  color: #08aa94;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry {
  margin-right: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .search_entry i {
  font-size: 24px;
  color: rgb(7, 185, 36);
}
</style>