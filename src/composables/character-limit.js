import { ref } from "vue";

export function calculateRemainingChars(charCount, charInputLimit) {
    const charCountRef = ref(charCount);
    const charInputLimitRef = ref(charInputLimit);

    return charInputLimitRef.value - charCountRef.value;
}
