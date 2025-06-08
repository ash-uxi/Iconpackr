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
    <path d="M6 9C7.57701 11.1808 9.42293 13.1364 11.4899 14.8172C11.7897 15.0609 12.2103 15.0609 12.5101 14.8172C14.5771 13.1364 16.423 11.1808 18 9" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiChevronBigDownStroke icon from the stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiChevronBigDownStroke',
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
