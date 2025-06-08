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
    <path d="M9 18C11.1808 16.423 13.1364 14.5771 14.8172 12.5101C15.0609 12.2103 15.0609 11.7897 14.8172 11.4899C13.1364 9.42294 11.1808 7.57701 9 6" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiChevronBigRightStroke icon from the stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiChevronBigRightStroke',
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
      default: 'chevron-big-right icon'
    }
  }
}
</script>
