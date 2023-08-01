<template>
  <div class="p-3 d-flex align-items-center w-100 chatListItem">
    <div
      class="position-relative me-3"
      v-if="chat.from.profile_image_url != ''"
    >
      <img :src="chat.from.profile_image_url" alt="" />
      <span
        class="status-indicator"
        :class="{ online: chat.from.online_status }"
      ></span>
    </div>
    <div class="no-profile me-3 position-relative" v-else>
      {{ chat.from.name[0] }}
      <span
        class="status-indicator"
        :class="{ online: chat.from.online_status }"
      ></span>
    </div>
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

  .status-indicator {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 14px;
    height: 14px;
    border: 3px solid $color-white;
    background: $color-gray;
    border-radius: 50%;

    &.online {
      background: $color-success !important;
    }
  }
}
</style>