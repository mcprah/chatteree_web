<template>
  <div class="text-input-wrapper d-flex flex-column">
    <label v-if="label" for="txtEmail">{{ label }}</label>
    <div class="inner-wrapper">
      <div class="prefix-slot" v-if="$slots.prefix" F>
        <slot name="prefix"></slot>
      </div>
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :type="type"
        class="form-control"
        :class="{ 'pe-5': $slots.suffix, 'ps-5': $slots.prefix }"
        name="txtEmail"
        id="txtEmail"
        :maxlength="maxlength"
      />
      <div class="suffix-slot" v-if="$slots.suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <div v-if="hasError" id="helpBlock" class="form-text mb-0">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
export default {
  name: "c-text-input",
  props: {
    hasError: {
      type: Boolean,
      default: true,
    },
    label: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
    maxlength: {
      type: String,
      default: "524,288",
    },
    errorMessage: {
      type: String,
      default: "text",
    },
    modelValue: {
      default: "",
    },
  },
  emits: ["update:modelValue"],

  computed: {
    // inputClasses() {
    //   return {
    //     ""
    //   }
    // }
  },
  methods: {},
};
</script>


<style lang="scss" scoped>
.text-input-wrapper {
  label {
    color: $color-gray-dark;
    font-size: 14px;
    margin-bottom: 4px;
    // margin-left: 8px;
  }
  input {
    height: 48px;
    background: $color-secondary-light;
    padding: 12px 18px;
    border-radius: 40px;
    font-weight: 500;
    border: none;
    transition: all 0.1s ease;

    &:focus {
      border: 1px solid $color-accent;
      box-shadow: 0 0 0px 4px rgba($color-accent, 0.4);
      background: $color-white;
    }
  }
  #helpBlock {
    padding-left: 18px;
    font-size: 12px;
    color: $color-danger;
    margin-top: 8px;
  }

  .inner-wrapper {
    position: relative;
    display: flex;
    align-items: center;

    .prefix-slot,
    .suffix-slot {
      position: absolute;
      :nth-child(n) {
        color: $color-gray-dark;
      }
    }

    .prefix-slot {
      left: 24px;
    }
    .suffix-slot {
      right: 24px;
    }
  }
}
</style>