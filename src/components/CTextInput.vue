<template>
  <div class="text-input-wrapper d-flex flex-column">
    <label v-if="label" for="txtEmail">{{ label }}</label>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="type"
      class="form-control"
      name="txtEmail"
      id="txtEmail"
    />
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
    errorMessage: {
      type: String,
      default: "text",
    },
    modelValue: {
      default: "",
    },
  },
  emits: ["update:modelValue"],

  data() {
    return {};
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
}
</style>