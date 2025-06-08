<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :style="{color: color || 'currentColor'}"
    role="img"
    :aria-label="ariaLabel"
    v-bind="$attrs"
  >
    <path d="M16.6549 11.561C17.7718 11.5777 18.894 11.1599 19.7462 10.3077C21.4179 8.63597 21.4179 5.92554 19.7462 4.25381C18.0745 2.58207 15.364 2.58206 13.6923 4.2538C12.8407 5.10541 12.4229 6.22654 12.4389 7.34261M12.4409 7.3214L16.6786 11.5591L6.77128 20.4236C5.87637 21.2243 4.51182 21.1864 3.6627 20.3373C2.81359 19.4882 2.77571 18.1236 3.57642 17.2287L12.4409 7.3214Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiMicMicrophoneStroke icon from the stroke style in media category.
 */
export default {
  name: 'PiMicMicrophoneStroke',
  props: {
    size: {
      type: Number,
      default: 24
    },
    color: {
      type: String,
      default: undefined
    },
    className: {
      type: String,
      default: undefined
    },
    ariaLabel: {
      type: String,
      default: 'mic-microphone icon'
    }
  }
}
</script>
