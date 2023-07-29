export default {
    showToast(message, ) {
        const toastLiveExample = document.getElementById("cToast");
        const toastBootstrap = Toast.getOrCreateInstance(toastLiveExample);
        if (!this.isValidOTP) toastBootstrap.show();
      },
}