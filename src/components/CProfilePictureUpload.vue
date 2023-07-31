<template>
  <div
    class="d-flex flex-column align-items-center"
    id="profileUploadComponent"
  >
    <img
      v-if="selectedFile"
      :src="previewURL"
      alt="Profile Picture Preview"
      class="preview-img"
    />
    <div class="circle-avatar" v-else></div>
    <div class="upload-action-wrapper">
      <label
        for="fileInput"
        class="btn shadow-sm bg-white border-light btn-sm rounded-pill px-3 py-1"
        id="btnUpload"
      >
        <span class="me-2"
          ><img src="@/assets/icons/icon/media/image.svg" alt=""
        /></span>
        <span>
          <span v-if="!selectedFile">Upload Photo</span>
          <span v-else>Change Photo</span>
        </span>
      </label>
      <input
        ref="fileInput"
        type="file"
        id="fileInput"
        accept="image/*"
        @change="handleFileInputChange"
      />
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      selectedFile: null,
      previewURL: "",
    };
  },
  methods: {
    handleFileInputChange(event) {
      console.log(event.target.files);
      const file = event.target.files[0];
      if (file) {
        this.selectedFile = file;
        this.previewURL = URL.createObjectURL(file);
      } else {
        this.selectedFile = null;
        this.previewURL = "";
      }
    },
  },
};
</script>
  
<style lang="scss" scoped>
#profileUploadComponent {
  position: relative;

  &::before {
    content: "";
    top: -10px;
    position: absolute;
    display: block;
    width: 218px;
    height: 218px;
    border-radius: 50%;
    border: 1px solid $color-secondary-light;
  }

  .upload-action-wrapper {
    position: absolute;
    bottom: -4px;
  }
  .circle-avatar {
    position: relative;
    background: $color-accent;
    overflow: hidden;

    &::after {
      content: "";
      bottom: -20px;
      right: -20px;
      position: absolute;
      width: 146px;
      height: 146px;
      border-radius: 50%;
      background: $color-accent-dark;
    }
  }
  .preview-img,
  .circle-avatar {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
  }
  #fileInput {
    display: none;
  }

  #btnUpload:hover {
    background: $color-secondary-light !important;
  }
}
</style>
  