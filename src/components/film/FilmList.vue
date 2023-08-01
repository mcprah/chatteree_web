<template>
  <div>
    <div class="d-flex justify-content-between mb-3">
      <small class="">Favourite chatters</small>
      <small>{{ useFilms.films.length }}</small>
    </div>
    <swiper
      :slides-per-view="5"
      :space-between="36"
      navigation
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(film, idx) in useFilms.films" :key="idx">
        <FilmItem
          @click="() => {}"
          :filmCount="film.unviewedFilmCount"
          :chatterName="film.name"
          :chatterPhoto="film.photoUrl"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { useFilmStore } from "@/stores/useFilmStore";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

import FilmItem from "@/components/film/FilmItem.vue";

import "swiper/css";
import "swiper/css/navigation";

export default {
  name: "film-list",
  components: { FilmItem, Swiper, SwiperSlide },
  data() {
    return {
      useFilms: useFilmStore(),
      swiperOptions: {
        loop: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>