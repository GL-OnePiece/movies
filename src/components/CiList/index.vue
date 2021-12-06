<template>
  <div class="cinema_body">
    <ul>
      <li>
        <div>
          <span>大地影院(敖东实际店)</span>
          <span class="q"><span class="price">22.9</span>元起</span>
        </div>
        <div class="address">
          <span>金州区大连经济开发区敖东纪元十三楼</span>
          <span>1963.5km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div>折扣卡</div>
        </div>
      </li>
      <li>
        <div>
          <span>大地影院(敖东实际店)</span>
          <span class="q"><span class="price">22.9</span>元起</span>
        </div>
        <div class="address">
          <span>金州区大连经济开发区敖东纪元十三楼</span>
          <span>1963.5km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div>折扣卡</div>
        </div>
      </li>
      <li>
        <div>
          <span>大地影院(敖东实际店)</span>
          <span class="q"><span class="price">22.9</span>元起</span>
        </div>
        <div class="address">
          <span>金州区大连经济开发区敖东纪元十三楼</span>
          <span>1963.5km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div>折扣卡</div>
        </div>
      </li>
      <li>
        <div>
          <span>大地影院(敖东实际店)</span>
          <span class="q"><span class="price">22.9</span>元起</span>
        </div>
        <div class="address">
          <span>金州区大连经济开发区敖东纪元十三楼</span>
          <span>1963.5km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div>折扣卡</div>
        </div>
      </li>
      <li>
        <div>
          <span>大地影院(敖东实际店)</span>
          <span class="q"><span class="price">22.9</span>元起</span>
        </div>
        <div class="address">
          <span>金州区大连经济开发区敖东纪元十三楼</span>
          <span>1963.5km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div>折扣卡</div>
        </div>
      </li>
    </ul>
    <!-- <MovieIn class="q" /> -->
  </div>
</template>


<script>
// import MovieIn from "@/components/MovieIn";

export default {
  name: "CiList",
  components: {
    // MovieIn,
  },
};
</script>



<style scoped>
.cinema_body {
  flex: 1;
  overflow: auto;
  margin-top: 50px;
  padding-bottom: 30px;
  background-color: rgb(234, 235, 230);
}
.cinema_body ul {
  padding: 20px;
}
.cinema_body li {
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 20px;
  list-style: none;
  border-bottom: white;
}
.cinema_body div {
  margin-bottom: 10px;
}
.cinema_body .q {
  font-size: 11px;
  color: #f03d37;
}
.cinema_body .adress {
  font-size: 13px;
  color: #666;
}
.cinema_body .adress span:nth-of-type(2) {
  float: right;
}
.cinema_body .card {
  display: flex;
}
.cinema_body .card div {
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  color: #f90;
  border: 1px solid #f90;
  font-size: 13px;
  margin-right: 5px;
}
.cinema_body .card div.or {
  color: #f90;
  border: 1px soli #f90;
}
.cinema_body .card div.b1 {
  color: #589daf;
  border: 1px solid #589daf;
}
</style>

