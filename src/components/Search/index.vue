<template>
  <div class="search_body">
    <div class="search_input">
      <div class="search_input_wrapper">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" v-model="keyWord" placeholder="请输入..." />
      </div>
    </div>
    <h3 v-show="isShow">{{ msg }}</h3>
    <!-- <div class="search_result">
      <h3>电影/电视剧/综艺</h3>
      <ul>
        <li>
          <div class="img">
            <img src="" alt="" />
          </div>
          <div class="info">
            <p><span>无名之辈</span><span>8.5</span></p>
            <p>A Cool Fish</p>
            <p>喜剧,剧情,犯罪</p>
            <p>2018-11-16</p>
          </div>
        </li>
        <li>
          <div class="img">
            <img src="" alt="" />
          </div>
          <div class="info">
            <p><span>无名之辈</span><span>8.5</span></p>
            <p>A Cool Fish</p>
            <p>喜剧,剧情,犯罪</p>
            <p>2018-11-16</p>
          </div>
        </li>
      </ul>
    </div> -->
    <div class="remv">
      <div v-for="item in renderMv" :key="item.id" class="mlist">
        <div class="pic_show">
          <img :src="item.imgURL" />
        </div>
        <h2>{{ item.name }}</h2>
        <!-- <button @click="sendimg">提交</button> -->
        <p>观众评价<span class="grade">9.2</span></p>
      </div>
    </div>
  </div>
</template>


<script >
export default {
  name: "Search",
  data() {
    return {
      searchMv: [],
      keyWord: "",
      isShow: true,
      msg: "快搜索你喜欢的影片吧!!!",
    };
  },
  computed: {
    renderMv: function () {
      return this.searchMv.filter((item) => {
        if (this.keyWord == "") {
          this.isShow = true;
          return;
        } else if (item.name.includes(this.keyWord)) {
          this.isShow = false;
          return item;
        } else if (!item.name.includes(this.keyWord)) {
          // return (this.isShow = true);
        }
      });
    },
  },
  created() {
    this.searchMv = this.$store.state.all;
  },
};
</script>

<style scoped>
#content .search_body {
  flex: 1;
  overflow: auto;
  margin-top: 50px;
  width: 100vw;

  /* height: auto; */
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 50px; */
}
.search_body h3 {
  color: rgb(168, 157, 157);
  margin-left: 45px;
  margin-top: 20px;
}

.search_body .search_input_wrapper i {
  font-size: 16px;
  padding: 4px 0;
}
.search_body .search_input .search_input_wrapper input {
  border: none;
  font-size: 13px;
  color: #333;
  padding: 4px 0;
  outline: none;
  margin-left: 30px;
  width: 75%;
  height: 35px;
  border-radius: 5px;
}

.remv {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 50px;
  margin-top: 20px;
}
.search_body .remv .mlist {
  height: 201px;
  width: 108px;
  margin-left: 5px;
}

.search_body .remv .mlist .pic_show {
  width: 108px;
  height: 151px;
}
.search_body .remv .mlist .pic_show img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

.search_body .remv .mlist h2 {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  color: aliceblue;
}
.search_body .remv .mlist p {
  font-size: 13px;
  color: ghostwhite;
  display: flex;
  justify-content: center;
}
.search_body .remv .mlist p span {
  color: gold;
}
</style>