<template>
  <div class="movie_body">
    <div v-for="item in mname" :key="item.id" class="mlist">
      <router-link
        :to="{
          path: '/movie/nowPlaying/movieIn',
          query: {
            name: item.name,
            img: item.imgURL,
            mtype: item.mtype,
            ctime: item.ctime,
            director: item.director,
            introduce: item.introduce,
            actor: item.actor,
          },
        }"
      >
        <div class="pic_show">
          <img :src="item.imgURL" />
        </div>
      </router-link>
      <h2>{{ item.name }}</h2>
      <!-- <button @click="sendimg">提交</button> -->
      <p>{{ item.mtype }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "MovieList",
  data() {
    return {
      movies: [],
      mimg: [],
    };
  },
  methods: {
    // sendimg() {
    //   this.$Bus.$emit("showimg", this.mimg);
    //   // console.log(this.ming);
    // },
  },
  computed: {
    ...mapState(["getName"]),
    mname() {
      return this.movies.filter((item) => {
        if (this.getName === "") return true;
        else if (item.mtype.includes(this.getName)) {
          return item;
        }
      });
    },
  },
  methods: {},
  mounted() {
    console.log(this.getName);
  },
  created() {
    axios
      .get("http://localhost:8080/static/mdata.json")
      .then((res) => {
        this.movies = res.data.data;
        this.$store.commit("getall", this.movies);
        // console.log(this.mname);
        this.mimg = res.data.mimg;
        this.$store.commit("push", this.mimg);

        // this.movies = this.sendList;
        // this.mname = this.$store.state.getName;
        // this.$nextTick(() => {
        //   let _this = this;
        //
        // });
        // console.log(this.movies);
        // console.log(this.$stroe.state.flmv);
        // console.log(this.$stroe.state.filmv);
        // this.mvtype = res.data.data;
        // this.mvtype = this.mvtype.filter((item) => {
        //   if (item.mtype == mname) {
        //     return item;
        //   }
        // });
        // this.$store.commit("add", this.mvtype);
      })

      .catch((error) => {
        error;
      });
  },
};
</script>

<style scoped>
.movie_body {
  /* overflow: hidden; */
  width: 100vw;
  /* height: auto; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 50px;
}
.movie_body .mlist {
  height: 201px;
  width: 108px;
  margin-left: 5px;
}
/* .movie_body .mlist {
  flex: 1;
  flex-direction: column;
  width: 30%;
} */

.movie_body .pic_show {
  width: 108px;
  height: 151px;
  /* margin-right: 5px; */
}
.movie_body .pic_show img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
/* .movie_body .pic_show img:hover {
  transition: 0.2s ease-in-out;
  transform: scale(1.2);
} */
.movie_body h2 {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  color: aliceblue;
  /* width: 150px;
  line-height: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
   */
}
.movie_body p {
  font-size: 13px;
  color: ghostwhite;
  display: flex;
  justify-content: center;
  /* line-height: 22px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; */
}
.movie_body p span {
  color: gold;
}
</style>>
