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
    <path fill="currentColor" d="M11.49 14.817A30.6 30.6 0 0 1 6 9c3.993.333 8.007.333 12 0a30.6 30.6 0 0 1-5.49 5.817.8.8 0 0 1-1.02 0" opacity=".28"/>
  <path d="M11.49 14.817A30.6 30.6 0 0 1 6 9c3.993.333 8.007.333 12 0a30.6 30.6 0 0 1-5.49 5.817.8.8 0 0 1-1.02 0"/>
  </svg>
</template>

<script>
/**
 * PiChevronBigDownContrast icon from the contrast style in arrows-&-chevrons category.
 */
export default {
  name: 'PiChevronBigDownContrast',
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
      default: 'chevron-big-down icon'
    }
  }
}
</script>
