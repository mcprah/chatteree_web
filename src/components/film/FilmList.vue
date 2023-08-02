<template>
  <div>
    <div class="d-flex justify-content-between mb-3">
      <small class="">Favourite chatters</small>
      <small>{{ useFilms.films.length }}</small>
    </div>
    <swiper-container
      :slides-per-view="5"
      :space-between="36"
      :centered-slides="false"
      :navigation="true"
      :breakpoints="{
        768: {
          slidesPerView: 5,
        },
      }"
      @progress="onProgress"
      @slidechange="onSlideChange"
      ref="swiperRef"
      init="false"
    >
      <swiper-slide v-for="(film, idx) in useFilms.films" :key="idx">
        <FilmItem
          @click="() => {}"
          :filmCount="film.unviewedFilmCount"
          :chatterName="film.name"
          :chatterPhoto="film.photoUrl"
        />
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script>
import { useFilmStore } from "@/stores/useFilmStore";
import { register } from "swiper/element/bundle";

import FilmItem from "@/components/film/FilmItem.vue";

export default {
  name: "film-list",
  components: { FilmItem },
  data() {
    return {
      useFilms: useFilmStore(),
      spaceBetween: 36,
      swiperRef: null,
    };
  },
  methods: {
    onProgress: function (e) {
      const [swiper, progress] = e.detail;
    },

    onSlideChange: function (e) {},
  },
  created() {
    register();
  },
  mounted() {
    const swiperContainer = this.$refs.swiperRef;
    console.log(swiperContainer);
    const params = {
      navigation: true,

      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            width: 32px ;
            height: 32px ;
            background: #ffffff ;
            border-radius: 50%;
            box-shadow: 0 0.5rem 1rem rgba(16, 28, 38, 0.05);
            color: #000000;
          }
          .swiper-button-next svg ,  .swiper-button-prev svg{
            width: 20%;
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  },
};
</script>

<style lang="scss" scoped>
</style>