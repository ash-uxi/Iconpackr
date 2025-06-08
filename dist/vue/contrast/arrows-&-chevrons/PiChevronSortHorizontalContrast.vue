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
    <g fill="currentColor" opacity=".28">
    <path d="M18.894 12.298A20.4 20.4 0 0 1 15 16c.2-2.663.2-5.337 0-8a20.4 20.4 0 0 1 3.894 3.702.47.47 0 0 1 0 .596M5.106 11.702A20.4 20.4 0 0 1 9 8c-.2 2.663-.2 5.337 0 8a20.4 20.4 0 0 1-3.894-3.702.47.47 0 0 1 0-.596"/>
  </g>
  <path d="M18.894 12.298A20.4 20.4 0 0 1 15 16c.2-2.663.2-5.337 0-8a20.4 20.4 0 0 1 3.894 3.702.47.47 0 0 1 0 .596M5.106 11.702A20.4 20.4 0 0 1 9 8c-.2 2.663-.2 5.337 0 8a20.4 20.4 0 0 1-3.894-3.702.47.47 0 0 1 0-.596"/>
  </svg>
</template>

<script>
/**
 * PiChevronSortHorizontalContrast icon from the contrast style in arrows-&-chevrons category.
 */
export default {
  name: 'PiChevronSortHorizontalContrast',
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
      default: 'chevron-sort-horizontal icon'
    }
  }
}
</script>
