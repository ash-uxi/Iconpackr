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
    <path  d="M11.5 2A5.5 5.5 0 0 0 6 7.5v2.036q.09-.052.184-.1c.485-.247 1.002-.346 1.564-.392L8 9.027V7.5a3.5 3.5 0 1 1 7 0v1.527q.13.007.252.017c.562.046 1.079.145 1.564.392q.093.048.184.1V7.5A5.5 5.5 0 0 0 11.5 2" fill="none"/>
  <path d="M5 14.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C7.28 10 8.12 10 9.8 10h3.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C18 12.28 18 13.12 18 14.8v1.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C15.72 21 14.88 21 13.2 21H9.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C5 18.72 5 17.88 5 16.2z" opacity=".28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiLock02CloseDuoStroke icon from the duo-stroke style in security category.
 */
export default {
  name: 'PiLock02CloseDuoStroke',
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
      default: 'lock-02-close icon'
    }
  }
}
</script>
