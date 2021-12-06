<template>
  <div class="movie_body">
    <div class="container">
      <div class="bg1">
        <h2><i class="fas fa-battery-three-quarters"></i></h2>
        <p>呼吸</p>
      </div>
      <div class="bg1">
        <h2><i class="fas fa-running"></i></h2>
        <p>公里</p>
      </div>
      <div class="bg1">
        <h2>36 &deg;</h2>
        <p>温度</p>
      </div>
      <div class="bg1">
        <h2><i class="fas fa-bed"></i></h2>
        <p>睡眠质量</p>
      </div>
      <div class="bg1">
        <h2>98<span>bpm</span></h2>
        <p>心率</p>
      </div>
      <div class="bg1">
        <h2>50<span>kg</span></h2>
        <p>体重</p>
      </div>
      <div class="bg2">
        <h2>20<span>%</span></h2>
        <p>体脂率</p>
      </div>
      <div class="bg2">
        <h2>108<span>mgdl</span></h2>
        <p>血糖</p>
      </div>
      <div class="bg2">
        <h2>680<span>kcal</span></h2>
        <p>平均消耗</p>
      </div>
      <div class="bg2">
        <h2><i class="fas fa-dumbbell"></i></h2>
        <p>锻炼</p>
      </div>
      <div class="bg2">
        <h2>85<span>%</span></h2>
        <p>身体含水量</p>
      </div>
      <div class="bg2">
        <h2>75<span>%</span></h2>
        <p>空气清新</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ComingSoon",
};
</script>


<style scoped>
#content .movie_body {
  flex: 1;
  overflow: auto;
  margin-top: 100px;
  /* margin-bottom: 100px; */

  /* display: flex;
  justify-content: center;
  align-items: center; */
}
.bg1,
.bg2 p {
  color: white;
}
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  height: 100vh;
  width: 95vw;
  margin: auto;
  padding-bottom: 50px;
}
.container > div {
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.5s ease-in-out;
}
.container > div:hover {
  opacity: 0.7;
  transform: scale(0.98);
}

.container > div:nth-of-type(1) {
  grid-column: 1/3;
}
.container > div:nth-of-type(6) {
  grid-column: 3/5;
}

.container > div:nth-of-type(9) {
  grid-column: 3/5;
}
.container > div:nth-of-type(10) {
  grid-column: 1/3;
}
.bg1 {
  background-image: url("http://localhost:8080/static/img/bg1.jpg");
}
.bg2 {
  background-image: url("http://localhost:8080/static/img/bg2.jpg");
}
</style>