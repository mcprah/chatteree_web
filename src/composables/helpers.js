import { ref } from "vue";

export function calculateRemainingChars(charCount, charInputLimit) {
    const charCountRef = ref(charCount);
    const charInputLimitRef = ref(charInputLimit);

    return charInputLimitRef.value - charCountRef.value;
}

export function truncateString(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength ) + "...";
    } else {
        return str;
    }
}
