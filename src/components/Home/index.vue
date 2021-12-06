<template>
  <div class="city_body">
    <div class="scroll">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="item in mImg" :key="item.id"
          ><img :src="item.imgURL" alt="1"
        /></swiper-slide>
      </swiper>
    </div>
  </div>
</template>


<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "City",
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      mImg: [],
      swiperOption: {
        notNextTick: true,
        //循环
        loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        autoplay: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        // 设置轮播
        effect: "flip",
        //滑动速度
        speed: 2000,
        //滑动方向
        direction: "horizontal",
        //小手掌抓取滑动
        grabCursor: true,
        //滑动之后回调函数
        on: {
          slideChangeTransitionEnd: function () {
            // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
          },
        },
        //左右点击
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperSlides: [1, 2, 3, 4],
    };
  },

  // methods: {
  //   showimg(data) {
  //     this.data = this.mImg;
  //   },
  // },

  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  beforeCreate() {
    //可以使用swiper这个对象去使用swiper官网中的那些方法
    // console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(0, 0, false);
  },
  mounted() {
    this.mImg = this.$store.state.num;
  },
};
</script>

<style scoped>
#content .city_body {
  /* margin-top: 45px; */
  display: flex;
  width: 100%;

  position: relative;
  top: 0px;
  bottom: 0;
  z-index: -10;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.swiper-slide {
  height: 200px;
  background: white;
}
.swiper-slide img {
  height: 100%;
  width: 100%;
  background-repeat: no-repeat cover content;
}
</style>