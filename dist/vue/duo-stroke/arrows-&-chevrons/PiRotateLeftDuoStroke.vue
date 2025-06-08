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
    <path d="M5.73864 7.01746C7.20439 5.17853 9.46355 4 11.998 4C16.4162 4 19.998 7.58172 19.998 12C19.998 16.4183 16.4162 20 11.998 20C8.27029 20 5.13809 17.4505 4.25 14" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M6.21461 2.66992C5.70539 3.86202 5.35307 5.11461 5.16604 6.39629C5.1172 6.73098 5.38097 6.88085 5.6446 6.9818C5.67592 6.9938 5.70727 7.00568 5.73867 7.01746C6.85855 7.43772 8.02546 7.72281 9.21461 7.86607" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiRotateLeftDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiRotateLeftDuoStroke',
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
      default: 'rotate-left icon'
    }
  }
}
</script>
