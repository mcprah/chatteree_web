<template>
  <div class="p-3 d-flex w-100 chatListItem">
    <div v-if="chat.from.profile_image_url != ''">
      <img :src="chat.from.profile_image_url" alt="" class="me-3" />
    </div>
    <div class="no-profile me-3" v-else>{{ chat.from.name[0] }}</div>
    <div class="flex-grow-1">
      <div class="d-flex justify-content-between senderDetails">
        <p class="name">{{ chat.from.name }}</p>
        <p class="date-time">{{ chat.date_time }}</p>
      </div>
      <div class="d-flex latestMessageSnippet">
        <p
          class="flex-grow-1"
          :class="{ 'fw-medium text-dark': chat.unread_count }"
        >
          {{ truncateMessageSnippet(chat.value[chat.value.length - 1].text) }}
        </p>
        <span
          class="badge rounded-pill bg-secondary text-dark"
          v-if="chat.unread_count"
        >
          {{ chat.unread_count }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { useChatStore } from "@/stores/useChatStore";
import { truncateString } from "@/composables/helpers";

export default {
  name: "chat-list-item",
  props: {
    chat: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {};
  },
  methods: {
    truncateMessageSnippet(message) {
      return truncateString(message, 40);
    },
  },
};
</script>

<style lang="scss" scoped>
.chatListItem {
  cursor: pointer;
  &:hover {
    background: $color-secondary-light;
  }

  p {
    margin-bottom: 0;
  }
  img,
  .no-profile {
    object-fit: cover;
    width: 46px;
    height: 46px;
    border-radius: 50%;
  }
  .no-profile {
    display: flex;
    justify-content: center;
    align-items: center;
    background: $color-accent;
    font-weight: 500;
  }

  .name {
    font-weight: 500;
  }

  .date-time,
  .latestMessageSnippet {
    font-size: 13px;
    color: $color-gray-dark;
  }
}
</style>