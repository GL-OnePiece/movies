<template>
  <div>
    <h2>电影</h2>
    <div class="content">
      <div
        class="filmClass"
        v-for="(item, index) of mvname"
        :key="index"
        @click="sendName(item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmClass",
  data() {
    return {
      mvname: ["喜剧", "科幻", "动画", "犯罪"],
    };
  },

  methods: {
    sendName(name) {
      this.$store.commit("changeName", name);
    },
  },
};
</script>


<style  scoped>
.content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.filmClass {
  text-align: center;
  line-height: 58px;
  margin-left: 5px;
  width: 82px;
  height: 58px;
  border-radius: 8px;
  color: rgb(12, 8, 8);
  background: white;

  /* display: inline-block; */
  /* margin: 0; */
  /* float: left; */
  /* display: flex; */
}
.filmClass:hover {
  transform: scale(0.9);
  transition: all 0.1s ease-in-out;
  background-color: gray;
}
h2 {
  margin-left: 25px;
  margin-top: 10px;
  color: white;
}
</style>>
