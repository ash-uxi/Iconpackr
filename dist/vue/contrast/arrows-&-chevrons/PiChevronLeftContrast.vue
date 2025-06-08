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
    <path d="M10.106 11.702A20.4 20.4 0 0 1 14 8a53 53 0 0 0 0 8 20.4 20.4 0 0 1-3.894-3.702.47.47 0 0 1 0-.596"/>
  <path fill="currentColor" d="M10.106 11.702A20.4 20.4 0 0 1 14 8l-.304 4L14 16a20.4 20.4 0 0 1-3.894-3.702.47.47 0 0 1 0-.596" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiChevronLeftContrast icon from the contrast style in arrows-&-chevrons category.
 */
export default {
  name: 'PiChevronLeftContrast',
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
      default: 'chevron-left icon'
    }
  }
}
</script>
