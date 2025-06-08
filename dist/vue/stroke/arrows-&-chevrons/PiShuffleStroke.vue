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
    <path d="M18.1885 4C19.1755 4.74024 20.0668 5.59899 20.8426 6.55643C20.9475 6.68592 21 6.84296 21 7M18.1885 10C19.1755 9.25976 20.0668 8.40101 20.8426 7.44357C20.9475 7.31408 21 7.15704 21 7M21 7L17.1239 7C15.166 7 13.3313 7.95527 12.2085 9.55923L8.79146 14.4408C7.66869 16.0447 5.83395 17 3.87607 17H2M18.1885 20C19.1755 19.2598 20.0668 18.401 20.8426 17.4436C20.9475 17.3141 21 17.157 21 17M18.1885 14C19.1755 14.7402 20.0668 15.599 20.8426 16.5564C20.9475 16.6859 21 16.843 21 17M21 17H17.1239C15.7187 17 14.3768 16.5079 13.3162 15.637M2 7L3.87607 7C5.35342 7 6.76066 7.54391 7.84481 8.5" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiShuffleStroke icon from the stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiShuffleStroke',
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
      default: 'shuffle icon'
    }
  }
}
</script>
