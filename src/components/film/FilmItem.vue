<template>
  <div class="d-inline-flex flex-column align-items-center film">
    <div class="position-relative">
      <img :src="chatterPhoto" alt="Chatter's Photo" />
      <span
        v-if="filmCount > 0"
        class="position-absolute translate-middle badge rounded-pill bg-secondary text-dark"
      >
        {{ filmCount }}
      </span>
    </div>
    <p class="chatter-name mb-0">{{ truncatedName }}</p>
  </div>
</template>

<script>
import { truncateString } from "@/composables/helpers";

export default {
  props: {
    filmCount: {
      type: Number,
      default: 1,
    },
    chatterName: {
      type: String,
      default: "Name",
    },
    chatterPhoto: {
      type: String,
      default: "@/assets/images/sample-pic.png",
    },
  },
  computed: {
    truncatedName() {
      return truncateString(this.chatterName, 9);
    },
  },
};
</script>

<style lang="scss" scoped>
.film {
  width: 64px;
  cursor: pointer;
  img {
    object-fit: cover;
    width: 46px;
    height: 46px;
    border-radius: 50%;
  }
  .badge {
    right: -12px;
    top: 10px;
  }
  .chatter-name {
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    line-height: 16px;
    margin-top: 4px;
  }
}
</style>