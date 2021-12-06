<template>
  <div class="inbody">
    <ul>
      <li>
        <div class="movie">
          <img :src="`${this.$route.query.img}`" alt="" />
          <span> {{ this.$route.query.name }}</span>
          <div class="introduce">
            <div>电影</div>
            <div>{{ this.$route.query.mtype }}</div>
            <div>{{ this.$route.query.ctime }}</div>
          </div>
          <div class="introduce-show">
            <div>
              <span>导演:</span>
              <span>{{ this.$route.query.director }}</span>
            </div>
            <div>
              <span>主演:</span>
              <span>{{ this.$route.query.actor }}</span>
            </div>
            <div>
              <span>剧情简介:</span>
              <span>{{ this.$route.query.introduce }}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MovieIn",
  data() {
    return {};
  },
  mounted() {
    // console.log(this.$route);
  },
};
</script>

<style  scoped>
.inbody {
  height: 100%;
  width: 100%;
}
li {
  position: relative;
  display: flex;
  /* align-items: center; */
  /* padding-top: 120px; */
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  /* background-color: white; */
  color: rgb(7, 1, 1);
}
li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: transparent url("http://localhost:8080/static/img/bg5.jpeg")
    center center no-repeat;
  background-size: cover;
  filter: blur(5px);
  z-index: -1;
  background-attachment: fixed;
}
li .movie img {
  width: 176px;
  height: 245px;
  border: white 1.5px solid;
  border-radius: 10px;
  /* z-index: 1000; */
}
li .movie {
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}
li .movie span {
  color: white;
  margin-top: 10px;
  font-size: 30px;
}
.introduce {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 350px;

  display: flex;
  justify-content: center;
}
.introduce div {
  /* display: flex; */
  /* width: 84.7px; */
  /* height: 28px; */
  background: rgb(29, 24, 24);
  margin-left: 5px;
  border-radius: 5px;
  color: rgb(223, 208, 208);
  text-align: center;
  line-height: 28px;
  display: inline-block;
  padding: 0 10px;
  /* font-size: 0.5rem; */
}
/* .introduce-show {
  display: flex;
  flex-wrap: wrap;
} */
.introduce-show {
  width: 90%;
}
.introduce-show div {
  color: white;
  /* display: inline-block; */
  display: flex;
  flex-direction: row;
  justify-content: stretch;
}

.introduce-show div span {
  font-size: 16px;
  min-width: 70px;
}
.introduce-show div span:nth-child(1) {
  color: hsla(0, 0%, 100%, 0.6);
}
</style>