<template>
  <div class="content">
    <filmClass></filmClass>

    <movieList></movieList>
  </div>
</template>


<script >
import filmClass from "./FilmClass";
import movieList from "./MovieList";

export default {
  name: "NowPlaying",
  components: {
    filmClass,
    movieList,
  },
};
</script>

<style scoped>
.content {
  /* display: flex;
  flex-direction: column; */
  width: 100%;
}
</style>